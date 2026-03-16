import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

export async function POST(req: NextRequest) {
  const secret = process.env.WHOP_WEBHOOK_SECRET;
  if (!secret) {
    console.error("WHOP_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const signature = req.headers.get("whop-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  const body = await req.text();

  // Verify HMAC-SHA256 signature from Whop
  const expected = createHmac("sha256", secret).update(body).digest("hex");
  const expectedBuffer = Buffer.from(expected, "hex");
  const receivedBuffer = Buffer.from(signature, "hex");

  if (
    expectedBuffer.length !== receivedBuffer.length ||
    !timingSafeEqual(expectedBuffer, receivedBuffer)
  ) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(body);

  // Handle successful payment
  if (event.action === "payment.succeeded" || event.action === "membership.went_valid") {
    const email = event.data?.email ?? event.data?.user?.email;
    const userId = event.data?.user_id ?? event.data?.id;

    console.log("Payment confirmed for:", userId, "email:", email);

    // Forward buyer email to Make.com webhook
    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (makeWebhookUrl && email) {
      try {
        await fetch(makeWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            user_id: userId,
            event: event.action,
            timestamp: new Date().toISOString(),
          }),
        });
        console.log("Make.com webhook sent for:", email);
      } catch (err) {
        console.error("Failed to send Make.com webhook:", err);
      }
    } else if (!makeWebhookUrl) {
      console.warn("MAKE_WEBHOOK_URL is not set — skipping Make.com webhook");
    }
  }

  return NextResponse.json({ received: true });
}

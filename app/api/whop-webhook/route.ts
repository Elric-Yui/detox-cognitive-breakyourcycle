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
    // TODO: Grant access — e.g. send confirmation email, update DB, etc.
    console.log("Payment confirmed for:", event.data?.user_id ?? event.data?.id);
  }

  return NextResponse.json({ received: true });
}

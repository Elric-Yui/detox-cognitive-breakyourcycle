"use client";

const WHOP_URL = "/checkout";

interface CTAButtonProps {
  label?: string;
  size?: "lg" | "sm";
  className?: string;
}

export default function CTAButton({
  label = "Accéder maintenant — 47€",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-block font-sans font-bold rounded-lg transition-all duration-200 shadow-lg text-white cursor-pointer";
  const sizeStyles =
    size === "lg"
      ? "px-10 py-5 text-lg tracking-wide"
      : "px-6 py-3 text-sm tracking-wide";

  return (
    <a
      href={WHOP_URL}
      className={`${base} ${sizeStyles} bg-violet hover:bg-violet-light hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] active:scale-95 ${className}`}
    >
      {label}
    </a>
  );
}

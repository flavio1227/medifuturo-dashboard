"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { formatMoney, formatNumber } from "@/lib/utils";

type Props = {
  value: number;
  mode?: "money" | "number" | "roi";
  className?: string;
  durationMs?: number;
};

export default function AnimatedNumber({
  value,
  mode = "number",
  className,
  durationMs = 1300,
}: Props) {
  const { ref, inView } = useInView({ threshold: 0.35, once: false });
  const current = useCountUp(value, inView, durationMs);

  let text = formatNumber(Math.round(current));
  if (mode === "money") text = formatMoney(Math.round(current));
  if (mode === "roi") text = `${current.toFixed(2)}x`;

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

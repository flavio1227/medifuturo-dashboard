"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delayMs?: number;
};

export default function Reveal({
  children,
  className,
  variant = "slide-up",
  delayMs = 0,
}: RevealProps) {
  // once:false → al salir y volver a entrar se re-aplica fade/slide
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0.2 });

  const style = {
    transitionDelay: `${delayMs}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        `reveal-${variant}`,
        inView && "reveal-visible",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

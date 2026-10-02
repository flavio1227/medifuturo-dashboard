"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Marca una sección para el modo presentación (spotlight). */
export default function PresentSection({ id, children, className }: Props) {
  return (
    <div
      id={id}
      data-present-section={id}
      className={cn("scroll-mt-24 present-section", className)}
    >
      {children}
    </div>
  );
}

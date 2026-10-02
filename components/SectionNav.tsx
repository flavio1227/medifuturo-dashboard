"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "ahorro", label: "Ahorro" },
  { id: "kpis", label: "KPIs" },
  { id: "graficos", label: "Gráficos" },
  { id: "proyeccion", label: "Proyección" },
  { id: "pacientes", label: "Pacientes" },
  { id: "compromisos", label: "Compromisos" },
];

export default function SectionNav() {
  const [active, setActive] = useState("ahorro");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!els.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <nav
      className="sticky top-2 z-30 mb-5 overflow-x-auto rounded-full border border-slate-200/80 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md"
      aria-label="Navegación del dashboard"
    >
      <ul className="flex min-w-max items-center gap-1">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => goTo(s.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                active === s.id
                  ? "bg-clinical-700 text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              )}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

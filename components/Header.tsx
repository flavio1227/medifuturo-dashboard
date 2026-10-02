"use client";

import { Activity } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import Reveal from "@/components/Reveal";

export default function Header() {
  return (
    <header className="mb-6 md:mb-8">
      <Reveal variant="fade" className="rounded-2xl border border-slate-200/80 bg-white px-3 py-5 shadow-sm sm:px-6 sm:py-6">
        <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-700">
          Alianza institucional · Salud pública
        </p>

        {/* Misma caja: logos ocupan más del área interna */}
        <div className="flex h-[8.5rem] items-center justify-center gap-3 overflow-hidden sm:h-36 sm:gap-6 md:h-40 md:gap-8">
          <div className="flex h-full min-w-0 flex-1 items-center justify-center">
            <img
              src={withBasePath("/logos/secretaria-de-salud.png")}
              alt="Gobierno de la República · Secretaría de Salud"
              className="h-full w-auto max-w-full object-contain"
              width={300}
              height={300}
              decoding="async"
            />
          </div>

          <div
            className="h-16 w-px shrink-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent sm:h-24"
            aria-hidden
          />

          <div className="flex h-full min-w-0 flex-1 items-center justify-center">
            <img
              src={withBasePath("/logos/medifuturo-logo.jpeg")}
              alt="Droguería Medifuturo"
              className="h-full w-auto max-w-full object-contain"
              width={320}
              height={180}
              decoding="async"
            />
          </div>
        </div>

        <p className="mt-2 text-center text-xs leading-relaxed text-slate-500">
          Secretaría de Salud · Droguería Medifuturo — Fondo de Contingencia
        </p>
      </Reveal>

      <Reveal variant="slide-up" delayMs={120} className="mt-5 text-center md:mt-6 md:text-left">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-800">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          Fondo de Contingencia · Salud Pública
        </div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Dashboard de Ahorro Municipal
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 md:mx-0 md:text-base">
          Indicadores de desempeño del Fondo de Contingencia — impacto fiscal y
          clínico con trazabilidad completa
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 md:justify-start">
          <Activity className="h-3.5 w-3.5" />
          <span>Última actualización: Mayo 2026</span>
        </div>
      </Reveal>
    </header>
  );
}

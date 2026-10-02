"use client";

import { Activity } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import Reveal from "@/components/Reveal";

export default function Header() {
  return (
    <header className="mb-6 md:mb-8">
      <Reveal variant="fade" className="rounded-2xl border border-slate-200/80 bg-white px-3 py-5 shadow-sm sm:px-6 sm:py-6">
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-700">
          Alianza institucional · Salud pública
        </p>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8 md:gap-12">
          {/* Secretaría / Gobierno */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <img
              src={withBasePath("/logos/secretaria-de-salud.png")}
              alt="Gobierno de la República · Secretaría de Salud"
              className="h-24 w-auto max-w-[200px] object-contain sm:h-28 md:h-32"
              width={220}
              height={220}
              decoding="async"
            />
          </div>

          {/* Separador vertical / horizontal */}
          <div
            className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent sm:h-24 sm:w-px sm:bg-gradient-to-b"
            aria-hidden
          />

          {/* Medifuturo */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <img
              src={withBasePath("/logos/medifuturo-logo.jpeg")}
              alt="Droguería Medifuturo"
              className="h-20 w-auto max-w-[240px] object-contain sm:h-24 md:h-28"
              width={280}
              height={160}
              decoding="async"
            />
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
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

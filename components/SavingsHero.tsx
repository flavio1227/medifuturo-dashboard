"use client";

import { kpis } from "@/data/dashboard-data";
import { formatMoney, formatNumber } from "@/lib/utils";
import { Landmark, TrendingDown, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function SavingsHero() {
  const pctVsEstado =
    (kpis.total_ahorro_neto / (kpis.total_ahorro_neto + kpis.total_inversion)) *
    100;

  return (
    <Reveal variant="slide-up" className="mb-6 md:mb-8">
      <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 via-teal-700 to-sky-900 text-white shadow-lg">
        <div className="relative px-4 py-6 sm:px-6 sm:py-8 md:px-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-emerald-400/10 blur-2xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal-100 backdrop-blur">
                <Landmark className="h-3.5 w-3.5" />
                Ahorro para el gobierno
              </div>
              <p className="text-sm font-medium text-teal-100/90">
                Ahorro neto documentado
              </p>
              <p className="animate-savings-glow mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {formatMoney(kpis.total_ahorro_neto)}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm text-teal-50/90">
                <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>
                  El Estado deja de gastar{" "}
                  <strong className="text-white">
                    {pctVsEstado.toFixed(0)}%
                  </strong>{" "}
                  frente al costo habitual — {formatNumber(kpis.total_pacientes)}{" "}
                  pacientes operados con trazabilidad completa.
                </span>
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto lg:min-w-[22rem]">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-100/80">
                  Ahorro bruto
                </p>
                <p className="mt-1 text-lg font-bold sm:text-xl">
                  {formatMoney(kpis.total_ahorro_bruto)}
                </p>
              </div>
              <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/15 p-4 backdrop-blur transition-transform duration-300 hover:scale-[1.02]">
                <p className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-100">
                  <Sparkles className="h-3 w-3" />
                  Proyección anual
                </p>
                <p className="mt-1 text-lg font-bold text-emerald-50 sm:text-xl">
                  {formatMoney(kpis.ahorro_proyectado_anual)}
                </p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur transition-transform duration-300 hover:scale-[1.02]">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-100/80">
                  ROI promedio
                </p>
                <p className="mt-1 text-lg font-bold sm:text-xl">
                  {kpis.promedio_roi}x
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

"use client";

import { Users, Landmark, PiggyBank, BarChart3 } from "lucide-react";
import { kpis } from "@/data/dashboard-data";
import { formatMoney, formatNumber } from "@/lib/utils";
import Reveal from "@/components/Reveal";

export default function KPIs() {
  const cards = [
    {
      title: "Pacientes Operados",
      value: formatNumber(kpis.total_pacientes),
      sub: "Casos documentados",
      icon: Users,
      accent: "border-sky-200 bg-sky-50 text-sky-700",
      valueClass: "text-sky-800",
      highlight: false,
    },
    {
      title: "Inversión Alcaldía Municipal",
      value: formatMoney(kpis.total_inversion),
      sub: "Recursos municipales asignados",
      icon: Landmark,
      accent: "border-slate-200 bg-slate-50 text-slate-600",
      valueClass: "text-slate-800",
      highlight: false,
    },
    {
      title: "Ahorro Neto del Estado",
      value: formatMoney(kpis.total_ahorro_neto),
      sub: "Vs. costo habitual del Estado",
      icon: PiggyBank,
      accent: "border-emerald-300 bg-emerald-50 text-emerald-700",
      valueClass: "text-emerald-700",
      highlight: true,
    },
    {
      title: "ROI Promedio",
      value: `${kpis.promedio_roi}x`,
      sub: "Retorno por cada lempira",
      icon: BarChart3,
      accent: "border-amber-200 bg-amber-50 text-amber-700",
      valueClass: "text-amber-700",
      highlight: false,
    },
  ];

  return (
    <div className="reveal-stagger mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:mb-8 xl:grid-cols-4">
      {cards.map((card, i) => (
        <Reveal
          key={card.title}
          variant="scale"
          delayMs={i * 90}
          className={card.highlight ? "sm:col-span-2 xl:col-span-1" : undefined}
        >
          <div
            className={`relative h-full overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${
              card.highlight
                ? "border-emerald-300 ring-2 ring-emerald-100"
                : "border-slate-200/80"
            }`}
          >
            {card.highlight && (
              <span className="absolute right-3 top-3 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                Clave
              </span>
            )}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {card.title}
                </p>
                <p
                  className={`mt-2 break-words text-xl font-bold leading-tight sm:text-2xl ${card.valueClass}`}
                >
                  {card.value}
                </p>
                <p className="mt-1.5 text-xs text-slate-400">{card.sub}</p>
              </div>
              <div className={`shrink-0 rounded-xl border p-2.5 ${card.accent}`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

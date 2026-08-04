"use client";

import { Users, TrendingUp, PiggyBank, BarChart3 } from "lucide-react";
import { kpis } from "@/data/dashboard-data";
import { formatMoney, formatNumber } from "@/lib/utils";

export default function KPIs() {
  const cards = [
    {
      title: "Pacientes Operados",
      value: formatNumber(kpis.total_pacientes),
      sub: "Casos documentados",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Inversión Medifuturo",
      value: formatMoney(kpis.total_inversion),
      sub: "Total invertido",
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Ahorro Neto",
      value: formatMoney(kpis.total_ahorro_neto),
      sub: "vs. costo estado",
      icon: PiggyBank,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "ROI Promedio",
      value: `${kpis.promedio_roi}x`,
      sub: "Retorno por caso",
      icon: BarChart3,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                {card.title}
              </p>
              <p className={`text-2xl font-bold mt-1 ${card.color}`}>
                {card.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">{card.sub}</p>
            </div>
            <div className={`p-3 rounded-lg ${card.bg}`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
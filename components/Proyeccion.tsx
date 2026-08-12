"use client";

import { trimestral, kpis } from "@/data/dashboard-data";
import { formatMoney, formatNumber } from "@/lib/utils";
import { TrendingUp, Users, BedDouble } from "lucide-react";

export default function Proyeccion() {
  const total9M = {
    pacientes: trimestral.reduce((s, t) => s + t.pacientes, 0),
    inversion: trimestral.reduce((s, t) => s + t.inversion, 0),
    ahorro_hosp: trimestral.reduce((s, t) => s + t.ahorro_hosp, 0),
    ahorro_neto: trimestral.reduce((s, t) => s + t.ahorro_neto, 0),
    dias_cama: trimestral.reduce((s, t) => s + t.dias_cama, 0),
  };

  const mobileCards = [
    {
      label: "Pacientes operados",
      icon: Users,
      values: [
        ...trimestral.map((t) => formatNumber(t.pacientes)),
        formatNumber(total9M.pacientes),
        formatNumber(kpis.pacientes_proyectados_anual),
      ],
      highlightLast: true,
    },
    {
      label: "Inversión Alcaldía Municipal",
      values: [
        ...trimestral.map((t) => formatMoney(t.inversion)),
        formatMoney(total9M.inversion),
        formatMoney(kpis.inversion_proyectada_anual),
      ],
    },
    {
      label: "Ahorro neto (gobierno)",
      values: [
        ...trimestral.map((t) => formatMoney(t.ahorro_neto)),
        formatMoney(total9M.ahorro_neto),
        formatMoney(kpis.ahorro_proyectado_anual),
      ],
      savings: true,
    },
    {
      label: "Días cama liberados",
      icon: BedDouble,
      values: [
        ...trimestral.map((t) => formatNumber(t.dias_cama)),
        formatNumber(total9M.dias_cama),
        formatNumber(kpis.dias_cama_proyectados),
      ],
    },
  ];

  const periods = ["T1", "T2", "T3", "9 meses", "Anual"];

  return (
    <div className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5 md:mb-8">
      <div className="mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-clinical-700" />
        <h3 className="text-sm font-semibold text-slate-800">
          Proyección Financiera Trimestral — 2026
        </h3>
      </div>

      {/* Vista móvil: tarjetas */}
      <div className="space-y-3 md:hidden">
        {mobileCards.map((row) => (
          <div
            key={row.label}
            className={`rounded-xl border p-3 ${
              row.savings
                ? "border-emerald-200 bg-emerald-50/60"
                : "border-slate-100 bg-slate-50/80"
            }`}
          >
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              {row.icon && <row.icon className="h-3.5 w-3.5 text-slate-400" />}
              {row.label}
            </p>
            <div className="grid grid-cols-2 gap-2 xs:grid-cols-3">
              {row.values.map((v, i) => (
                <div key={periods[i]} className="rounded-lg bg-white px-2 py-1.5">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    {periods[i]}
                  </p>
                  <p
                    className={`text-xs font-semibold ${
                      row.savings || (row.highlightLast && i === 4)
                        ? "text-emerald-700"
                        : "text-slate-700"
                    }`}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Vista tablet/desktop: tabla */}
      <div className="table-scroll hidden overflow-x-auto md:block">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-3 py-3 text-left font-semibold text-slate-500">
                Indicador
              </th>
              <th className="px-3 py-3 text-right font-semibold text-slate-500">
                T1 (Mes 1-3)
              </th>
              <th className="px-3 py-3 text-right font-semibold text-slate-500">
                T2 (Mes 4-6)
              </th>
              <th className="px-3 py-3 text-right font-semibold text-slate-500">
                T3 (Mes 7-9)
              </th>
              <th className="px-3 py-3 text-right font-bold text-slate-600">
                Total 9 Meses
              </th>
              <th className="rounded-t-lg bg-emerald-50 px-3 py-3 text-right font-bold text-slate-800">
                Proy. Anual
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="flex items-center gap-2 px-3 py-3 text-slate-700">
                <Users className="h-4 w-4 text-slate-400" />
                Pacientes operados
              </td>
              {trimestral.map((t) => (
                <td
                  key={t.trimestre}
                  className="px-3 py-3 text-right text-slate-600"
                >
                  {formatNumber(t.pacientes)}
                </td>
              ))}
              <td className="px-3 py-3 text-right font-semibold text-slate-800">
                {formatNumber(total9M.pacientes)}
              </td>
              <td className="bg-emerald-50/50 px-3 py-3 text-right font-bold text-emerald-700">
                {formatNumber(kpis.pacientes_proyectados_anual)}
              </td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-3 py-3 text-slate-700">
                Inversión Alcaldía Municipal
              </td>
              {trimestral.map((t) => (
                <td
                  key={t.trimestre}
                  className="px-3 py-3 text-right text-slate-600"
                >
                  {formatMoney(t.inversion)}
                </td>
              ))}
              <td className="px-3 py-3 text-right font-semibold text-slate-800">
                {formatMoney(total9M.inversion)}
              </td>
              <td className="bg-emerald-50/50 px-3 py-3 text-right font-bold text-sky-800">
                {formatMoney(kpis.inversion_proyectada_anual)}
              </td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="px-3 py-3 text-slate-700">
                Ahorro hospitalización
              </td>
              {trimestral.map((t) => (
                <td
                  key={t.trimestre}
                  className="px-3 py-3 text-right text-slate-600"
                >
                  {formatMoney(t.ahorro_hosp)}
                </td>
              ))}
              <td className="px-3 py-3 text-right font-semibold text-slate-800">
                {formatMoney(total9M.ahorro_hosp)}
              </td>
              <td className="bg-emerald-50/50 px-3 py-3 text-right font-bold text-emerald-700">
                {formatMoney(
                  kpis.ahorro_proyectado_anual + kpis.inversion_proyectada_anual
                )}
              </td>
            </tr>
            <tr className="border-b border-emerald-100 bg-emerald-50/30">
              <td className="px-3 py-3 font-semibold text-emerald-800">
                Ahorro neto del gobierno
              </td>
              {trimestral.map((t) => (
                <td
                  key={t.trimestre}
                  className="px-3 py-3 text-right font-semibold text-emerald-700"
                >
                  {formatMoney(t.ahorro_neto)}
                </td>
              ))}
              <td className="px-3 py-3 text-right font-bold text-emerald-800">
                {formatMoney(total9M.ahorro_neto)}
              </td>
              <td className="bg-emerald-100/60 px-3 py-3 text-right font-bold text-emerald-800">
                {formatMoney(kpis.ahorro_proyectado_anual)}
              </td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="flex items-center gap-2 px-3 py-3 text-slate-700">
                <BedDouble className="h-4 w-4 text-slate-400" />
                Días cama liberados
              </td>
              {trimestral.map((t) => (
                <td
                  key={t.trimestre}
                  className="px-3 py-3 text-right text-slate-600"
                >
                  {formatNumber(t.dias_cama)}
                </td>
              ))}
              <td className="px-3 py-3 text-right font-semibold text-slate-800">
                {formatNumber(total9M.dias_cama)}
              </td>
              <td className="bg-emerald-50/50 px-3 py-3 text-right font-bold text-emerald-700">
                {formatNumber(kpis.dias_cama_proyectados)}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 font-semibold text-slate-700">
                ROI del período
              </td>
              {trimestral.map((t) => (
                <td
                  key={t.trimestre}
                  className="px-3 py-3 text-right font-bold text-amber-600"
                >
                  {t.roi}x
                </td>
              ))}
              <td className="px-3 py-3 text-right font-bold text-amber-600">
                2.57x
              </td>
              <td className="rounded-b-lg bg-emerald-50/50 px-3 py-3 text-right font-bold text-amber-700">
                2.57x
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

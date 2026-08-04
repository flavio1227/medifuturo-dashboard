"use client";

import { trimestral, kpis } from "@/data/dashboard-data";
import { formatMoney, formatNumber } from "@/lib/utils";
import { TrendingUp, Calendar, Users, BedDouble } from "lucide-react";

export default function Proyeccion() {
  const total9M = {
    pacientes: trimestral.reduce((s, t) => s + t.pacientes, 0),
    inversion: trimestral.reduce((s, t) => s + t.inversion, 0),
    ahorro_hosp: trimestral.reduce((s, t) => s + t.ahorro_hosp, 0),
    ahorro_neto: trimestral.reduce((s, t) => s + t.ahorro_neto, 0),
    dias_cama: trimestral.reduce((s, t) => s + t.dias_cama, 0),
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-slate-700">
          Proyección Financiera Trimestral — 2026
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-3 text-slate-500 font-semibold">Indicador</th>
              <th className="text-right py-3 px-3 text-slate-500 font-semibold">T1 (Mes 1-3)</th>
              <th className="text-right py-3 px-3 text-slate-500 font-semibold">T2 (Mes 4-6)</th>
              <th className="text-right py-3 px-3 text-slate-500 font-semibold">T3 (Mes 7-9)</th>
              <th className="text-right py-3 px-3 text-slate-600 font-bold">Total 9 Meses</th>
              <th className="text-right py-3 px-3 text-slate-800 font-bold bg-emerald-50 rounded-t-lg">Proy. Anual</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-3 text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" />
                Pacientes operados
              </td>
              {trimestral.map((t) => (
                <td key={t.trimestre} className="py-3 px-3 text-right text-slate-600">{formatNumber(t.pacientes)}</td>
              ))}
              <td className="py-3 px-3 text-right font-semibold text-slate-800">{formatNumber(total9M.pacientes)}</td>
              <td className="py-3 px-3 text-right font-bold text-emerald-700 bg-emerald-50/50">{formatNumber(kpis.pacientes_proyectados_anual)}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-3 text-slate-700">Inversión Medifuturo</td>
              {trimestral.map((t) => (
                <td key={t.trimestre} className="py-3 px-3 text-right text-slate-600">{formatMoney(t.inversion)}</td>
              ))}
              <td className="py-3 px-3 text-right font-semibold text-slate-800">{formatMoney(total9M.inversion)}</td>
              <td className="py-3 px-3 text-right font-bold text-blue-700 bg-emerald-50/50">{formatMoney(kpis.inversion_proyectada_anual)}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-3 text-slate-700">Ahorro hospitalización</td>
              {trimestral.map((t) => (
                <td key={t.trimestre} className="py-3 px-3 text-right text-slate-600">{formatMoney(t.ahorro_hosp)}</td>
              ))}
              <td className="py-3 px-3 text-right font-semibold text-slate-800">{formatMoney(total9M.ahorro_hosp)}</td>
              <td className="py-3 px-3 text-right font-bold text-emerald-700 bg-emerald-50/50">{formatMoney(kpis.ahorro_proyectado_anual + kpis.inversion_proyectada_anual)}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-3 text-slate-700">Ahorro neto</td>
              {trimestral.map((t) => (
                <td key={t.trimestre} className="py-3 px-3 text-right text-slate-600">{formatMoney(t.ahorro_neto)}</td>
              ))}
              <td className="py-3 px-3 text-right font-semibold text-slate-800">{formatMoney(total9M.ahorro_neto)}</td>
              <td className="py-3 px-3 text-right font-bold text-emerald-700 bg-emerald-50/50">{formatMoney(kpis.ahorro_proyectado_anual)}</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-3 text-slate-700 flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-slate-400" />
                Días cama liberados
              </td>
              {trimestral.map((t) => (
                <td key={t.trimestre} className="py-3 px-3 text-right text-slate-600">{formatNumber(t.dias_cama)}</td>
              ))}
              <td className="py-3 px-3 text-right font-semibold text-slate-800">{formatNumber(total9M.dias_cama)}</td>
              <td className="py-3 px-3 text-right font-bold text-emerald-700 bg-emerald-50/50">{formatNumber(kpis.dias_cama_proyectados)}</td>
            </tr>
            <tr>
              <td className="py-3 px-3 text-slate-700 font-semibold">ROI del período</td>
              {trimestral.map((t) => (
                <td key={t.trimestre} className="py-3 px-3 text-right font-bold text-amber-600">{t.roi}x</td>
              ))}
              <td className="py-3 px-3 text-right font-bold text-amber-600">2.57x</td>
              <td className="py-3 px-3 text-right font-bold text-amber-700 bg-emerald-50/50 rounded-b-lg">2.57x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
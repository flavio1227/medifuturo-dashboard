"use client";

import { pacientes } from "@/data/dashboard-data";
import { formatMoney } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

export default function PacientesTable() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-700">
          Registro de Pacientes Operados
        </h3>
        <span className="text-xs text-slate-400">{pacientes.length} registros</span>
      </div>
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg border border-slate-100">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-slate-50 z-10">
            <tr className="border-b border-slate-200">
              <th className="text-left py-2.5 px-3 text-slate-500 font-semibold">ID</th>
              <th className="text-left py-2.5 px-3 text-slate-500 font-semibold">Paciente</th>
              <th className="text-left py-2.5 px-3 text-slate-500 font-semibold">Hospital</th>
              <th className="text-left py-2.5 px-3 text-slate-500 font-semibold">Especialidad</th>
              <th className="text-left py-2.5 px-3 text-slate-500 font-semibold">Implante</th>
              <th className="text-right py-2.5 px-3 text-slate-500 font-semibold">Inv. Medifuturo</th>
              <th className="text-right py-2.5 px-3 text-slate-500 font-semibold">Costo Estado</th>
              <th className="text-right py-2.5 px-3 text-slate-500 font-semibold">Ahorro Neto</th>
              <th className="text-right py-2.5 px-3 text-slate-500 font-semibold">ROI</th>
              <th className="text-center py-2.5 px-3 text-slate-500 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p) => (
              <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="py-2 px-3 text-slate-600 font-mono">{p.id}</td>
                <td className="py-2 px-3 text-slate-700 font-medium">{p.nombre}</td>
                <td className="py-2 px-3 text-slate-600">{p.hospital}</td>
                <td className="py-2 px-3">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    p.especialidad === "Ortopedia"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-purple-50 text-purple-700"
                  }`}>
                    {p.especialidad}
                  </span>
                </td>
                <td className="py-2 px-3 text-slate-600 max-w-[180px] truncate" title={p.implante}>
                  {p.implante}
                </td>
                <td className="py-2 px-3 text-right text-slate-600">{formatMoney(p.total_medifuturo)}</td>
                <td className="py-2 px-3 text-right text-slate-600">{formatMoney(p.costo_total_estado)}</td>
                <td className="py-2 px-3 text-right font-semibold text-emerald-600">
                  {formatMoney(p.ahorro_neto)}
                </td>
                <td className="py-2 px-3 text-right">
                  <span className={`font-bold text-xs ${
                    p.roi >= 1.5 ? "text-emerald-600" : p.roi >= 1 ? "text-amber-600" : "text-red-500"
                  }`}>
                    {p.roi}x
                  </span>
                </td>
                <td className="py-2 px-3 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs font-medium">
                    <BadgeCheck className="w-3 h-3" />
                    {p.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
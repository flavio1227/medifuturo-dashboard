"use client";

import { pacientes } from "@/data/dashboard-data";
import { formatMoney } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";

export default function PacientesTable() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5 md:mb-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-800">
          Registro de Pacientes Operados
        </h3>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">
          {pacientes.length} registros
        </span>
      </div>

      {/* Cards en móvil */}
      <div className="space-y-3 md:hidden">
        {pacientes.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-slate-100 bg-slate-50/70 p-3"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[10px] text-slate-400">{p.id}</p>
                <p className="text-sm font-semibold text-slate-800">{p.nombre}</p>
                <p className="text-xs text-slate-500">{p.hospital}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                <BadgeCheck className="h-3 w-3" />
                {p.estado}
              </span>
            </div>
            <p className="mb-2 truncate text-xs text-slate-600" title={p.implante}>
              {p.implante}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white px-2 py-1.5">
                <p className="text-[10px] text-slate-400">Inv. Alcaldía</p>
                <p className="text-xs font-medium text-slate-700">
                  {formatMoney(p.total_medifuturo)}
                </p>
              </div>
              <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-2 py-1.5">
                <p className="text-[10px] text-emerald-600">Ahorro neto</p>
                <p className="text-xs font-bold text-emerald-700">
                  {formatMoney(p.ahorro_neto)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Tabla en tablet+ */}
      <div className="table-scroll hidden max-h-[420px] overflow-auto rounded-xl border border-slate-100 md:block">
        <table className="w-full min-w-[900px] text-xs">
          <thead className="sticky top-0 z-10 bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-3 py-2.5 text-left font-semibold text-slate-500">
                ID
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-slate-500">
                Paciente
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-slate-500">
                Hospital
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-slate-500">
                Especialidad
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-slate-500">
                Implante
              </th>
              <th className="px-3 py-2.5 text-right font-semibold text-slate-500">
                Inv. Alcaldía
              </th>
              <th className="px-3 py-2.5 text-right font-semibold text-slate-500">
                Costo Estado
              </th>
              <th className="px-3 py-2.5 text-right font-semibold text-emerald-700">
                Ahorro Neto
              </th>
              <th className="px-3 py-2.5 text-right font-semibold text-slate-500">
                ROI
              </th>
              <th className="px-3 py-2.5 text-center font-semibold text-slate-500">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p) => (
              <tr
                key={p.id}
                className="border-b border-slate-50 transition-colors hover:bg-teal-50/30"
              >
                <td className="px-3 py-2 font-mono text-slate-600">{p.id}</td>
                <td className="px-3 py-2 font-medium text-slate-700">
                  {p.nombre}
                </td>
                <td className="px-3 py-2 text-slate-600">{p.hospital}</td>
                <td className="px-3 py-2">
                  <span
                    className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
                      p.especialidad === "Ortopedia"
                        ? "bg-sky-50 text-sky-700"
                        : "bg-teal-50 text-teal-700"
                    }`}
                  >
                    {p.especialidad}
                  </span>
                </td>
                <td
                  className="max-w-[180px] truncate px-3 py-2 text-slate-600"
                  title={p.implante}
                >
                  {p.implante}
                </td>
                <td className="px-3 py-2 text-right text-slate-600">
                  {formatMoney(p.total_medifuturo)}
                </td>
                <td className="px-3 py-2 text-right text-slate-600">
                  {formatMoney(p.costo_total_estado)}
                </td>
                <td className="px-3 py-2 text-right font-semibold text-emerald-600">
                  {formatMoney(p.ahorro_neto)}
                </td>
                <td className="px-3 py-2 text-right">
                  <span
                    className={`text-xs font-bold ${
                      p.roi >= 1.5
                        ? "text-emerald-600"
                        : p.roi >= 1
                          ? "text-amber-600"
                          : "text-red-500"
                    }`}
                  >
                    {p.roi}x
                  </span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                    <BadgeCheck className="h-3 w-3" />
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

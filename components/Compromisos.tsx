"use client";

import { compromisos } from "@/data/dashboard-data";
import { CalendarCheck, Target } from "lucide-react";

export default function Compromisos() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-blue-600" />
        <h3 className="text-sm font-semibold text-slate-700">
          Compromisos de Rendición de Cuentas a SESAL
        </h3>
      </div>
      <div className="space-y-3">
        {compromisos.map((c) => (
          <div
            key={c.periodo}
            className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
          >
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-md">
                <CalendarCheck className="w-3.5 h-3.5" />
                {c.periodo}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-700 leading-relaxed">{c.compromiso}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-2 bg-emerald-50 inline-block px-2 py-1 rounded">
                {c.indicador}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
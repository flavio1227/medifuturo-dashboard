"use client";

import { compromisos } from "@/data/dashboard-data";
import { CalendarCheck, Target } from "lucide-react";

export default function Compromisos() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5 md:mb-8">
      <div className="mb-4 flex items-center gap-2">
        <Target className="h-5 w-5 text-clinical-700" />
        <h3 className="text-sm font-semibold text-slate-800">
          Compromisos de Rendición de Cuentas a SESAL
        </h3>
      </div>
      <div className="space-y-3">
        {compromisos.map((c) => (
          <div
            key={c.periodo}
            className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-colors hover:border-teal-200 sm:flex-row sm:gap-4"
          >
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-clinical-100 px-3 py-1.5 text-xs font-bold text-clinical-800">
                <CalendarCheck className="h-3.5 w-3.5" />
                {c.periodo}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-relaxed text-slate-700">
                {c.compromiso}
              </p>
              <p className="mt-2 inline-block rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700">
                {c.indicador}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

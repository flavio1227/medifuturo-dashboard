"use client";

import { useState } from "react";
import { compromisos } from "@/data/dashboard-data";
import { CalendarCheck, ChevronDown, Target } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Compromisos() {
  const [open, setOpen] = useState<string>(compromisos[0]?.periodo ?? "");

  return (
    <Reveal variant="slide-up" className="mb-6 md:mb-8">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-clinical-700" />
          <h3 className="text-sm font-semibold text-slate-800">
            Compromisos de Rendición de Cuentas a SESAL
          </h3>
        </div>
        <div className="space-y-2">
          {compromisos.map((c) => {
            const isOpen = open === c.periodo;
            return (
              <div
                key={c.periodo}
                className={cn(
                  "overflow-hidden rounded-xl border transition-all duration-300",
                  isOpen
                    ? "border-teal-300 bg-teal-50/40 shadow-sm"
                    : "border-slate-100 bg-slate-50/80 hover:border-teal-200"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : c.periodo)}
                  className="flex w-full items-center gap-3 p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-clinical-100 px-3 py-1.5 text-xs font-bold text-clinical-800">
                    <CalendarCheck className="h-3.5 w-3.5" />
                    {c.periodo}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-slate-600">
                    {isOpen ? "Indicadores del período" : c.compromiso}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300",
                      isOpen && "rotate-180 text-teal-700"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2 px-4 pb-4">
                      <p className="text-sm leading-relaxed text-slate-700">
                        {c.compromiso}
                      </p>
                      <p className="inline-block rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700">
                        {c.indicador}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

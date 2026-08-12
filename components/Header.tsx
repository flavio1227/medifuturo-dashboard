"use client";

import Image from "next/image";
import { Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-6 md:mb-8">
      {/* Franja institucional de logos */}
      <div className="rounded-2xl border border-slate-200/80 bg-white px-3 py-4 shadow-sm sm:px-5 sm:py-5 md:px-6">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="w-full max-w-3xl">
            <Image
              src="/logos/alianza-sps-medifutur.png"
              alt="Municipalidad de San Pedro Sula · Droguería Medifutur"
              width={1200}
              height={280}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
          <div className="hidden shrink-0 border-l border-slate-200 pl-6 text-right lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-700">
              Alianza institucional
            </p>
            <p className="mt-1 max-w-[14rem] text-xs leading-relaxed text-slate-500">
              Alcaldía Municipal de San Pedro Sula y Droguería Medifutur
            </p>
          </div>
        </div>
      </div>

      {/* Título del dashboard */}
      <div className="mt-5 text-center md:mt-6 md:text-left">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-800">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          Fondo de Contingencia · Salud Pública
        </div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Dashboard de Ahorro Municipal
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 md:mx-0 md:text-base">
          Indicadores de desempeño del Fondo de Contingencia — impacto fiscal y
          clínico para la Alcaldía Municipal de San Pedro Sula
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 md:justify-start">
          <Activity className="h-3.5 w-3.5" />
          <span>Última actualización: Mayo 2026</span>
        </div>
      </div>
    </header>
  );
}

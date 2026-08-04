import KPIs from "@/components/KPIs";
import Charts from "@/components/Charts";
import PacientesTable from "@/components/PacientesTable";
import Proyeccion from "@/components/Proyeccion";
import Compromisos from "@/components/Compromisos";
import { Activity, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-3">
            <Shield className="w-4 h-4" />
            FONDO DE CONTINGENCIA MEDIFUTURO / SESAL
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            DASHBOARD ANALÍTICO
          </h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Indicadores de desempeño trimestral | Actualización automática desde Hoja de Control de Pacientes
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
            <Activity className="w-3.5 h-3.5" />
            <span>Última actualización: Mayo 2026</span>
          </div>
        </header>

        {/* KPIs */}
        <KPIs />

        {/* Charts */}
        <Charts />

        {/* Proyección Trimestral */}
        <Proyeccion />

        {/* Tabla de Pacientes */}
        <PacientesTable />

        {/* Compromisos */}
        <Compromisos />

        {/* Footer */}
        <footer className="text-center text-xs text-slate-400 py-6 border-t border-slate-200">
          <p className="font-medium text-slate-500">
            DROGUERÍA MEDIFUTURO — CATÁLOGO OFICIAL DE PRECIOS PARA EL FONDO DE CONTINGENCIA
          </p>
          <p className="mt-1">
            Precios fijos y transparentes para auditoría del Estado | Mayo 2026 — Válido para Red SESAL e IHSS
          </p>
        </footer>
      </div>
    </main>
  );
}
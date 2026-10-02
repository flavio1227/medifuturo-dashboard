import Header from "@/components/Header";
import SavingsHero from "@/components/SavingsHero";
import KPIs from "@/components/KPIs";
import Charts from "@/components/Charts";
import PacientesTable from "@/components/PacientesTable";
import Proyeccion from "@/components/Proyeccion";
import Compromisos from "@/components/Compromisos";

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <SavingsHero />
        <KPIs />
        <Charts />
        <Proyeccion />
        <PacientesTable />
        <Compromisos />

        <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-400">
          <p className="font-medium text-slate-600">
            Secretaría de Salud · Droguería Medifuturo
          </p>
          <p className="mt-1 mx-auto max-w-xl leading-relaxed">
            Catálogo oficial de precios para el Fondo de Contingencia — precios
            fijos y transparentes para auditoría del Estado · Mayo 2026 · Red
            SESAL e IHSS
          </p>
        </footer>
      </div>
    </main>
  );
}

import Header from "@/components/Header";
import SectionNav from "@/components/SectionNav";
import SavingsHero from "@/components/SavingsHero";
import KPIs from "@/components/KPIs";
import Charts from "@/components/Charts";
import PacientesTable from "@/components/PacientesTable";
import Proyeccion from "@/components/Proyeccion";
import Compromisos from "@/components/Compromisos";
import PresentationMode from "@/components/PresentationMode";
import PresentSection from "@/components/PresentSection";

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
        <SectionNav />

        <PresentSection id="ahorro">
          <SavingsHero />
        </PresentSection>

        <PresentSection id="kpis">
          <KPIs />
        </PresentSection>

        <PresentSection id="graficos">
          <Charts />
        </PresentSection>

        <PresentSection id="proyeccion">
          <Proyeccion />
        </PresentSection>

        <PresentSection id="pacientes">
          <PacientesTable />
        </PresentSection>

        <PresentSection id="compromisos">
          <Compromisos />
        </PresentSection>

        <footer className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-400">
          <p className="font-medium text-slate-600">
            Secretaría de Salud · Droguería Medifuturo
          </p>
          <p className="mx-auto mt-1 max-w-xl leading-relaxed">
            Catálogo oficial de precios para el Fondo de Contingencia — precios
            fijos y transparentes para auditoría del Estado · Mayo 2026 · Red
            SESAL e IHSS
          </p>
        </footer>
      </div>

      <PresentationMode />
    </main>
  );
}

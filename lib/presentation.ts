export type PresentationStep = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  holdMs: number;
};

export const PRESENTATION_STEPS: PresentationStep[] = [
  {
    id: "ahorro",
    label: "Ahorro",
    title: "Ahorro para el Gobierno",
    subtitle: "El impacto fiscal documentado del Fondo de Contingencia",
    holdMs: 5200,
  },
  {
    id: "kpis",
    label: "KPIs",
    title: "Indicadores Clave",
    subtitle: "Pacientes, inversión municipal, ahorro neto y ROI",
    holdMs: 4800,
  },
  {
    id: "graficos",
    label: "Gráficos",
    title: "Análisis Visual",
    subtitle: "Inversión vs ahorro por especialidad y materiales",
    holdMs: 5600,
  },
  {
    id: "proyeccion",
    label: "Proyección",
    title: "Proyección 2026",
    subtitle: "Escenario trimestral y proyección anual de ahorro",
    holdMs: 5000,
  },
  {
    id: "pacientes",
    label: "Pacientes",
    title: "Casos Documentados",
    subtitle: "Trazabilidad completa de cada cirugía e implante",
    holdMs: 4800,
  },
  {
    id: "compromisos",
    label: "Compromisos",
    title: "Rendición de Cuentas",
    subtitle: "Compromisos formales ante SESAL por período",
    holdMs: 4800,
  },
];

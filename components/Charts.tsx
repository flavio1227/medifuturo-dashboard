"use client";

import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";
import { RefreshCw } from "lucide-react";
import { porEspecialidad, porMaterial } from "@/data/dashboard-data";
import { formatMoney, cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import Reveal from "@/components/Reveal";

const COLORS = ["#0d9488", "#0369a1", "#d97706", "#64748b"];

type Metric = "ambos" | "inversion" | "ahorro";

function ActivePieShape(props: any) {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 12}
        outerRadius={outerRadius + 16}
        fill={fill}
      />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        className="fill-slate-800 text-xs font-bold"
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        className="fill-slate-500 text-[11px]"
      >
        {payload.pacientes} casos · {(percent * 100).toFixed(0)}%
      </text>
    </g>
  );
}

export default function Charts() {
  const bars = useInView({ threshold: 0.2 });
  const pie = useInView({ threshold: 0.2 });
  const [metric, setMetric] = useState<Metric>("ambos");
  const [barKey, setBarKey] = useState(0);
  const [pieKey, setPieKey] = useState(0);
  const [activePie, setActivePie] = useState<number | undefined>(0);

  const barData = useMemo(() => porEspecialidad, []);

  const metrics: { id: Metric; label: string }[] = [
    { id: "ambos", label: "Ambos" },
    { id: "inversion", label: "Inversión" },
    { id: "ahorro", label: "Ahorro" },
  ];

  return (
    <div
      id="graficos"
      className="mb-6 scroll-mt-20 grid grid-cols-1 gap-4 md:mb-8 md:gap-6 lg:grid-cols-2"
    >
      <Reveal variant="slide-left">
        <div
          ref={bars.ref}
          className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5"
        >
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Inversión vs Ahorro por Especialidad
              </h3>
              <p className="text-xs text-slate-400">
                Filtra métricas y reproduce la animación
              </p>
            </div>
            <button
              type="button"
              onClick={() => setBarKey((k) => k + 1)}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
            >
              <RefreshCw className="h-3 w-3" />
              Replay
            </button>
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {metrics.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setMetric(m.id);
                  setBarKey((k) => k + 1);
                }}
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-semibold transition",
                  metric === m.id
                    ? "bg-clinical-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="h-[240px] w-full sm:h-[280px]">
            {bars.inView && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  key={barKey}
                  data={barData}
                  margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    width={48}
                    tickFormatter={(v) => `L.${(v / 1000).toFixed(0)}K`}
                  />
                  <Tooltip
                    formatter={(value: number) => formatMoney(value)}
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
                    }}
                    cursor={{ fill: "rgba(13, 148, 136, 0.06)" }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  {(metric === "ambos" || metric === "inversion") && (
                    <Bar
                      dataKey="inversion"
                      name="Inversión Alcaldía"
                      fill="#0369a1"
                      radius={[4, 4, 0, 0]}
                      isAnimationActive
                      animationBegin={80}
                      animationDuration={1100}
                      animationEasing="ease-out"
                    />
                  )}
                  {(metric === "ambos" || metric === "ahorro") && (
                    <Bar
                      dataKey="ahorro_neto"
                      name="Ahorro Neto"
                      fill="#059669"
                      radius={[4, 4, 0, 0]}
                      isAnimationActive
                      animationBegin={220}
                      animationDuration={1200}
                      animationEasing="ease-out"
                    />
                  )}
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal variant="slide-right" delayMs={100}>
        <div
          ref={pie.ref}
          className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5"
        >
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Distribución por Material
              </h3>
              <p className="text-xs text-slate-400">
                Haz clic en un segmento para destacarlo
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPieKey((k) => k + 1)}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
            >
              <RefreshCw className="h-3 w-3" />
              Replay
            </button>
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {porMaterial.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActivePie(index)}
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-semibold transition",
                  activePie === index
                    ? "text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
                style={
                  activePie === index
                    ? { backgroundColor: COLORS[index % COLORS.length] }
                    : undefined
                }
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="h-[240px] w-full sm:h-[280px]">
            {pie.inView && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart key={pieKey}>
                  <Pie
                    data={porMaterial}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={82}
                    paddingAngle={4}
                    dataKey="pacientes"
                    nameKey="name"
                    activeIndex={activePie}
                    activeShape={ActivePieShape}
                    onClick={(_, index) => setActivePie(index)}
                    isAnimationActive
                    animationBegin={120}
                    animationDuration={1100}
                    animationEasing="ease-out"
                  >
                    {porMaterial.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        className="cursor-pointer outline-none transition-opacity"
                        opacity={
                          activePie === undefined || activePie === index
                            ? 1
                            : 0.45
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      `${value} casos`,
                      name,
                    ]}
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

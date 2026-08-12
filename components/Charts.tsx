"use client";

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
} from "recharts";
import { porEspecialidad, porMaterial } from "@/data/dashboard-data";
import { formatMoney } from "@/lib/utils";

const COLORS = ["#0d9488", "#0369a1", "#d97706", "#64748b"];

export default function Charts() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:mb-8 md:gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
        <h3 className="mb-1 text-sm font-semibold text-slate-800">
          Inversión vs Ahorro por Especialidad
        </h3>
        <p className="mb-4 text-xs text-slate-400">
          Comparativo de recursos municipales y ahorro generado
        </p>
        <div className="h-[240px] w-full sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={porEspecialidad}
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
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar
                dataKey="inversion"
                name="Inversión Alcaldía"
                fill="#0369a1"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="ahorro_neto"
                name="Ahorro Neto"
                fill="#059669"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
        <h3 className="mb-1 text-sm font-semibold text-slate-800">
          Distribución por Material
        </h3>
        <p className="mb-4 text-xs text-slate-400">
          Casos según tipo de implante utilizado
        </p>
        <div className="h-[240px] w-full sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={porMaterial}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={4}
                dataKey="pacientes"
                nameKey="name"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {porMaterial.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
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
        </div>
      </div>
    </div>
  );
}

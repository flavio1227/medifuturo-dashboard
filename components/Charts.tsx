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

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Inversión vs Ahorro por Especialidad */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">
          Inversión vs Ahorro por Especialidad
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={porEspecialidad} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `L.${(v / 1000).toFixed(0)}K`} />
            <Tooltip
              formatter={(value: number) => formatMoney(value)}
              contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="inversion" name="Inversión" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="ahorro_neto" name="Ahorro Neto" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Distribución por Material */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">
          Distribución por Material
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={porMaterial}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="pacientes"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {porMaterial.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [`${value} casos`, name]}
              contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
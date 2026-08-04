# Dashboard Medifuturo — Fondo de Contingencia SESAL

Dashboard analítico interactivo para visualizar el ahorro estatal generado por la reducción de mora quirúrgica mediante el Fondo de Contingencia Medifuturo / SESAL.

## 🚀 Tecnologías

- **Next.js 14** — Framework React
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Estilos utilitarios
- **Recharts** — Gráficos interactivos
- **Lucide React** — Iconos

## 📊 Funcionalidades

- **KPIs en tiempo real**: Pacientes operados, inversión, ahorro neto, ROI
- **Gráficos interactivos**: Barras (inversión vs ahorro por especialidad), pastel (distribución por material)
- **Tabla de pacientes**: 20 casos documentados con trazabilidad completa
- **Proyección trimestral**: T1, T2, T3 y proyección anual 2026
- **Compromisos SESAL**: Rendición de cuentas por período

## 🛠️ Instalación local

```bash
# 1. Clonar o descomprimir el proyecto
cd medifuturo-dashboard

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir en navegador
http://localhost:3000
```

## 📦 Build para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para subir a cualquier hosting estático.

## 🌐 Despliegue

### Opción 1: Vercel (Recomendada)
1. Sube el código a GitHub
2. Conecta el repo en [vercel.com](https://vercel.com)
3. Deploy automático en cada push

### Opción 2: Netlify
1. Sube la carpeta `dist/` a Netlify
2. O conecta el repo de GitHub

### Opción 3: Hostinger / cualquier hosting
1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu hosting

## 📝 Datos

Los datos están embebidos en `data/dashboard-data.ts` y provienen de:
- Hoja de Control de Pacientes (20 casos operados)
- Catálogo oficial de precios Medifuturo
- Proyección financiera trimestral 2026

## 👤 Autor

Proyecto desarrollado para presentación institucional — Fondo de Contingencia Medifuturo / SESAL 2026

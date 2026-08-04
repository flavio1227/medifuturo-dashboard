import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard Medifuturo — Fondo de Contingencia SESAL",
  description: "Indicadores de desempeño trimestral del Fondo de Contingencia Medifuturo / SESAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
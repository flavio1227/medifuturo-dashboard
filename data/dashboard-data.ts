export interface Paciente {
  id: string;
  nombre: string;
  hospital: string;
  especialidad: string;
  cirujano: string;
  implante: string;
  material: string;
  lote: string;
  costo_implante: number;
  total_medifuturo: number;
  costo_total_estado: number;
  ahorro_neto: number;
  roi: number;
  fecha_ingreso: string;
  fecha_cirugia: string;
  estado: string;
}

export interface TrimestreData {
  trimestre: string;
  meses: string;
  pacientes: number;
  inversion: number;
  ahorro_hosp: number;
  ahorro_neto: number;
  dias_cama: number;
  roi: number;
}

export interface Compromiso {
  periodo: string;
  compromiso: string;
  indicador: string;
}

export const kpis = {
  total_pacientes: 20,
  total_inversion: 530000,
  total_ahorro_bruto: 1075500,
  total_ahorro_neto: 545500,
  promedio_roi: 1.03,
  pacientes_proyectados_anual: 8315,
  inversion_proyectada_anual: 194902300,
  ahorro_proyectado_anual: 304297700,
  dias_cama_proyectados: 62450,
};

export const pacientes: Paciente[] = [
  { id: "MF-001", nombre: "Carlos A. Flores", hospital: "H. Escuela Universitario", especialidad: "Ortopedia", cirujano: "Dr. Rivera", implante: "Clavo intramedular fémur", material: "Acero 316L", lote: "LOT-2024-011", costo_implante: 11500, total_medifuturo: 15550, costo_total_estado: 40000, ahorro_neto: 24450, roi: 1.57, fecha_ingreso: "01/03/2026", fecha_cirugia: "10/03/2026", estado: "Operado" },
  { id: "MF-002", nombre: "María J. López", hospital: "H. Mario Catarino Rivas", especialidad: "Ortopedia", cirujano: "Dr. Mendez", implante: "Placa periarticular bloqueada", material: "Acero 316L", lote: "LOT-2024-012", costo_implante: 11500, total_medifuturo: 15550, costo_total_estado: 48000, ahorro_neto: 32450, roi: 2.09, fecha_ingreso: "02/03/2026", fecha_cirugia: "14/03/2026", estado: "Operado" },
  { id: "MF-003", nombre: "José M. Reyes", hospital: "H. Escuela Universitario", especialidad: "Neurocirugía", cirujano: "Dr. Castro", implante: "Malla craneotomía 30cm²", material: "Titanio", lote: "LOT-2024-013", costo_implante: 60000, total_medifuturo: 64050, costo_total_estado: 75000, ahorro_neto: 10950, roi: 0.17, fecha_ingreso: "03/03/2026", fecha_cirugia: "18/03/2026", estado: "Operado" },
  { id: "MF-004", nombre: "Ana R. Mendoza", hospital: "H. San Felipe", especialidad: "Ortopedia", cirujano: "Dr. Flores", implante: "Clavo PFNA antirrotación", material: "Acero 316L", lote: "LOT-2024-014", costo_implante: 14000, total_medifuturo: 18050, costo_total_estado: 35000, ahorro_neto: 16950, roi: 0.94, fecha_ingreso: "05/03/2026", fecha_cirugia: "11/03/2026", estado: "Operado" },
  { id: "MF-005", nombre: "Pedro A. Soto", hospital: "H. Mario Catarino Rivas", especialidad: "Neurocirugía", cirujano: "Dr. Hernández", implante: "Tornillos transpediculares ×6", material: "Titanio", lote: "LOT-2024-015", costo_implante: 30000, total_medifuturo: 34050, costo_total_estado: 90000, ahorro_neto: 55950, roi: 1.64, fecha_ingreso: "06/03/2026", fecha_cirugia: "21/03/2026", estado: "Operado" },
  { id: "MF-006", nombre: "Laura E. García", hospital: "H. de Occidente", especialidad: "Neurocirugía", cirujano: "Dr. Suazo", implante: "Canastilla PEEK", material: "Titanio", lote: "LOT-2024-016", costo_implante: 17500, total_medifuturo: 21550, costo_total_estado: 62000, ahorro_neto: 40450, roi: 1.88, fecha_ingreso: "08/03/2026", fecha_cirugia: "20/03/2026", estado: "Operado" },
  { id: "MF-007", nombre: "Roberto C. Matute", hospital: "H. Roberto Suazo", especialidad: "Ortopedia", cirujano: "Dr. Álvarez", implante: "Prótesis parcial cadera", material: "Acero 316L", lote: "LOT-2024-017", costo_implante: 14500, total_medifuturo: 18550, costo_total_estado: 41000, ahorro_neto: 22450, roi: 1.21, fecha_ingreso: "10/03/2026", fecha_cirugia: "28/03/2026", estado: "Operado" },
  { id: "MF-008", nombre: "Sandra P. Díaz", hospital: "H. Gabriela Alvarado", especialidad: "Ortopedia", cirujano: "Dr. Torres", implante: "Placa DCP bloqueada", material: "Acero 316L", lote: "LOT-2024-018", costo_implante: 5500, total_medifuturo: 9550, costo_total_estado: 32500, ahorro_neto: 22950, roi: 2.40, fecha_ingreso: "12/03/2026", fecha_cirugia: "19/03/2026", estado: "Operado" },
  { id: "MF-009", nombre: "Miguel A. Cruz", hospital: "H. General El Progreso", especialidad: "Ortopedia", cirujano: "Dr. Espinal", implante: "Fijador externo tibia", material: "Acero 316L", lote: "LOT-2024-019", costo_implante: 12500, total_medifuturo: 16550, costo_total_estado: 39000, ahorro_neto: 22450, roi: 1.36, fecha_ingreso: "14/03/2026", fecha_cirugia: "25/03/2026", estado: "Operado" },
  { id: "MF-010", nombre: "Carmen B. Ramos", hospital: "H. Regional del Sur", especialidad: "Ortopedia", cirujano: "Dr. Valladares", implante: "Clavo intramedular tibia", material: "Acero 316L", lote: "LOT-2024-020", costo_implante: 11500, total_medifuturo: 15550, costo_total_estado: 30000, ahorro_neto: 14450, roi: 0.93, fecha_ingreso: "15/03/2026", fecha_cirugia: "22/03/2026", estado: "Operado" },
  { id: "MF-011", nombre: "Héctor F. Núñez", hospital: "H. Escuela Universitario", especialidad: "Neurocirugía", cirujano: "Dr. Castro", implante: "Sistema fijación occipitocervical", material: "Titanio", lote: "LOT-2024-021", costo_implante: 20000, total_medifuturo: 24050, costo_total_estado: 105000, ahorro_neto: 80950, roi: 3.37, fecha_ingreso: "16/03/2026", fecha_cirugia: "31/03/2026", estado: "Operado" },
  { id: "MF-012", nombre: "Isabel M. Ramos", hospital: "H. Mario Catarino Rivas", especialidad: "Ortopedia", cirujano: "Dr. Mendez", implante: "Prótesis total cadera", material: "Acero 316L", lote: "LOT-2024-022", costo_implante: 52000, total_medifuturo: 56050, costo_total_estado: 78000, ahorro_neto: 21950, roi: 0.39, fecha_ingreso: "18/03/2026", fecha_cirugia: "03/04/2026", estado: "Operado" },
  { id: "MF-013", nombre: "Ernesto V. Lagos", hospital: "H. de Occidente", especialidad: "Ortopedia", cirujano: "Dr. Suazo", implante: "Clavos TEN flexibles", material: "Acero 316L", lote: "LOT-2024-023", costo_implante: 8000, total_medifuturo: 12050, costo_total_estado: 29000, ahorro_neto: 16950, roi: 1.41, fecha_ingreso: "19/03/2026", fecha_cirugia: "26/03/2026", estado: "Operado" },
  { id: "MF-014", nombre: "Patricia A. Colindres", hospital: "H. Atlántida", especialidad: "Ortopedia", cirujano: "Dr. Laínez", implante: "Placa periarticular pediátrica", material: "Acero 316L", lote: "LOT-2024-024", costo_implante: 11500, total_medifuturo: 15550, costo_total_estado: 35000, ahorro_neto: 19450, roi: 1.25, fecha_ingreso: "20/03/2026", fecha_cirugia: "05/04/2026", estado: "Operado" },
  { id: "MF-015", nombre: "Ricardo J. Zelaya", hospital: "H. Leonardo Martínez", especialidad: "Ortopedia", cirujano: "Dr. Rubí", implante: "Injerto óseo 15cc", material: "N/A", lote: "LOT-2024-025", costo_implante: 18000, total_medifuturo: 22050, costo_total_estado: 32500, ahorro_neto: 10450, roi: 0.47, fecha_ingreso: "22/03/2026", fecha_cirugia: "28/03/2026", estado: "Operado" },
  { id: "MF-016", nombre: "Gabriela T. Sánchez", hospital: "H. Santa Teresa", especialidad: "Neurocirugía", cirujano: "Dr. Alvarado", implante: "Tornillos masas laterales ×4", material: "Titanio", lote: "LOT-2024-026", costo_implante: 34000, total_medifuturo: 38050, costo_total_estado: 69000, ahorro_neto: 30950, roi: 0.81, fecha_ingreso: "23/03/2026", fecha_cirugia: "07/04/2026", estado: "Operado" },
  { id: "MF-017", nombre: "Fernando R. Calix", hospital: "H. San Francisco", especialidad: "Ortopedia", cirujano: "Dr. Molina", implante: "Clavo experto fémur", material: "Acero 316L", lote: "LOT-2024-027", costo_implante: 12500, total_medifuturo: 16550, costo_total_estado: 38000, ahorro_neto: 21450, roi: 1.30, fecha_ingreso: "25/03/2026", fecha_cirugia: "01/04/2026", estado: "Operado" },
  { id: "MF-018", nombre: "Silvia C. Bonilla", hospital: "H. Puerto Cortés", especialidad: "Ortopedia", cirujano: "Dr. Euceda", implante: "Fijador externo pelvis ALIS", material: "Acero 316L", lote: "LOT-2024-028", costo_implante: 12500, total_medifuturo: 16550, costo_total_estado: 35500, ahorro_neto: 18950, roi: 1.14, fecha_ingreso: "26/03/2026", fecha_cirugia: "08/04/2026", estado: "Operado" },
  { id: "MF-019", nombre: "Arturo D. Méndez", hospital: "IHSS Tegucigalpa", especialidad: "Ortopedia", cirujano: "Dr. Pereira", implante: "Prótesis total rodilla", material: "Acero 316L", lote: "LOT-2024-029", costo_implante: 52000, total_medifuturo: 56050, costo_total_estado: 76000, ahorro_neto: 19950, roi: 0.36, fecha_ingreso: "28/03/2026", fecha_cirugia: "10/04/2026", estado: "Operado" },
  { id: "MF-020", nombre: "Norma E. Villeda", hospital: "IHSS Regional Norte", especialidad: "Neurocirugía", cirujano: "Dr. Enamorado", implante: "Malla craneotomía 20cm²", material: "Titanio", lote: "LOT-2024-030", costo_implante: 40000, total_medifuturo: 44050, costo_total_estado: 85000, ahorro_neto: 40950, roi: 0.93, fecha_ingreso: "30/03/2026", fecha_cirugia: "14/04/2026", estado: "Operado" },
];

export const trimestral: TrimestreData[] = [
  { trimestre: "Trimestre 1", meses: "Mes 1-3", pacientes: 2105, inversion: 49246475, ahorro_hosp: 126300000, ahorro_neto: 77053525, dias_cama: 15788, roi: 2.57 },
  { trimestre: "Trimestre 2", meses: "Mes 4-6", pacientes: 2070, inversion: 48427650, ahorro_hosp: 124200000, ahorro_neto: 75772350, dias_cama: 15525, roi: 2.57 },
  { trimestre: "Trimestre 3", meses: "Mes 7-9", pacientes: 2070, inversion: 48427650, ahorro_hosp: 124200000, ahorro_neto: 75772350, dias_cama: 15525, roi: 2.57 },
];

export const compromisos: Compromiso[] = [
  { periodo: "Mes 3 — T1", compromiso: "Liquidación 100% del rezago inicial (1,035 pac.). Reporte de trazabilidad con implante, lote, hospital, cirujano e instrumentista por caso.", indicador: "L. 49,246,475 invertidos | L. 126,300,000 ahorrados | ROI 2.57x" },
  { periodo: "Mes 6 — T2", compromiso: "Reducción del 50% en estancia hospitalaria promedio demostrada. Cero prolongaciones >15 días. 4,175 cirugías documentadas.", indicador: "L. 97,674,125 invertidos | L. 250,500,000 ahorrados | ROI 2.57x acumulado" },
  { periodo: "Mes 9 — T3", compromiso: "Informe consolidado: 6,245 cirugías, L. 374.7M ahorrados, 46,838 días cama liberados. Solicitud formal de continuidad año 2.", indicador: "L. 146,101,775 invertidos | L. 374,700,000 ahorrados | ROI 2.57x" },
];

export const porEspecialidad = [
  { name: "Ortopedia", pacientes: 14, inversion: 149950, ahorro_neto: 240050 },
  { name: "Neurocirugía", pacientes: 6, inversion: 380050, ahorro_neto: 305450 },
];

export const porMaterial = [
  { name: "Acero 316L", pacientes: 13, costo_implante: 229000 },
  { name: "Titanio", pacientes: 6, costo_implante: 201500 },
  { name: "N/A", pacientes: 1, costo_implante: 18000 },
];

export const porHospital = [
  { name: "H. Escuela Univ.", pacientes: 3, inversion: 103650, ahorro_neto: 115350 },
  { name: "H. Mario Catarino", pacientes: 3, inversion: 105650, ahorro_neto: 110350 },
  { name: "H. de Occidente", pacientes: 2, inversion: 33600, ahorro_neto: 57400 },
  { name: "IHSS Tegucigalpa", pacientes: 1, inversion: 56050, ahorro_neto: 19950 },
  { name: "IHSS Regional Norte", pacientes: 1, inversion: 44050, ahorro_neto: 40950 },
  { name: "H. San Felipe", pacientes: 1, inversion: 18050, ahorro_neto: 16950 },
  { name: "H. Roberto Suazo", pacientes: 1, inversion: 18550, ahorro_neto: 22450 },
  { name: "H. Gabriela Alvarado", pacientes: 1, inversion: 9550, ahorro_neto: 22950 },
  { name: "H. General El Progreso", pacientes: 1, inversion: 16550, ahorro_neto: 22450 },
  { name: "H. Regional del Sur", pacientes: 1, inversion: 15550, ahorro_neto: 14450 },
  { name: "H. Atlántida", pacientes: 1, inversion: 15550, ahorro_neto: 19450 },
  { name: "H. Leonardo Martínez", pacientes: 1, inversion: 22050, ahorro_neto: 10450 },
  { name: "H. Santa Teresa", pacientes: 1, inversion: 38050, ahorro_neto: 30950 },
  { name: "H. San Francisco", pacientes: 1, inversion: 16550, ahorro_neto: 21450 },
  { name: "H. Puerto Cortés", pacientes: 1, inversion: 16550, ahorro_neto: 18950 },
];
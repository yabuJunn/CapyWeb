// data.ts
export type Categoria = "hogar" | "mercado" | "ropa";

export interface Gasto {
  categoria: Categoria;
  lugar: string;
  fecha: string; 
  monto: number;
}

export const gastos: Gasto[] = [
  { categoria: "mercado", lugar: "Éxito", fecha: "12-10", monto: 150000 },
  { categoria: "mercado", lugar: "Carulla", fecha: "15-09", monto: 120000 },
  { categoria: "ropa", lugar: "Shein", fecha: "05-08", monto: 80000 },
  { categoria: "ropa", lugar: "Zara", fecha: "20-07", monto: 110000 },
  { categoria: "hogar", lugar: "Homecenter", fecha: "02-10", monto: 500000 },
  { categoria: "hogar", lugar: "Cristalería La 13", fecha: "10-09", monto: 200000 },
];

export type Categoria = "hogar" | "mercado" | "ropa";

export interface Gasto {
  categoria: Categoria;
  lugar: string;
  fecha: string; 
  monto: number;
  img?: string
}

export const gastos: Gasto[] = [
  { categoria: "mercado", 
    lugar: "Éxito", 
    fecha: "12-10", 
    monto: 150000, 
    img: "../../../../../src/assets/svg/shopping-cart.svg"
  },
  { categoria: "mercado", 
    lugar: "Carulla",
    fecha: "15-09", 
    monto: 120000, 
    img:"../../../../../src/assets/svg/shopping-cart.svg"
  },
  { categoria: "ropa", 
    lugar: "Shein", 
    fecha: "05-08",
    monto: 80000,
    img: "../../../../../src/assets/svg/shopping-cart.svg"
  },
  { categoria: "ropa", 
    lugar: "Zara", 
    fecha: "20-07", 
    monto: 110000,
    img: "../../../../../src/assets/svg/shopping-cart.svg"
  },
  { categoria: "ropa", 
    lugar: "Stradivarius", 
    fecha: "20-07", 
    monto: 80000,
    img: "../../../../../src/assets/svg/shopping-cart.svg"
  },
  { categoria: "hogar", 
    lugar: "Homecenter",
    fecha: "02-10",
    monto: 500000,
    img: "../../../../../src/assets/svg/home.svg"
  },
  { categoria: "hogar", 
    lugar: "Cristalería La 13", 
    fecha: "10-09",
    monto: 200000,
    img: "../../../../../src/assets/svg/home.svg"
  },
];

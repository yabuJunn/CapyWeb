export type Category = "home" | "market" | "clothes";

export interface Expense {
  category: Category;
  place: string;
  date: string; 
  amount: number;
  img?: string;
}

export const expenses: Expense[] = [
  { category: "market", 
    place: "Éxito", 
    date: "12-10", 
    amount: 150000, 
    img: "../../../../../src/assets/svg/cart.svg"
  },
  { category: "market", 
    place: "Carulla",
    date: "15-09", 
    amount: 120000, 
    img: "../../../../../src/assets/svg/cart.svg"
  },
  { category: "clothes", 
    place: "Zara", 
    date: "20-07", 
    amount: 110000,
    img: "../../../../../src/assets/svg/shopping.svg"
  },
  { category: "clothes", 
    place: "Stradivarius", 
    date: "20-07", 
    amount: 80000,
    img: "../../../../../src/assets/svg/shopping.svg"
  },
  { category: "home", 
    place: "Homecenter",
    date: "02-10",
    amount: 500000,
    img: "../../../../../src/assets/svg/home.svg"
  },
  { category: "home", 
    place: "Cristalería La 13", 
    date: "10-09",
    amount: 200000,
    img: "../../../../../src/assets/svg/home.svg"
  },
];
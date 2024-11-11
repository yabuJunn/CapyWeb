export type Category = "visa" | "nu";

export interface Expense {
  category: Category;
  date: string;
  amount: number;
  img?: string;
}

export const expenses: Expense[] = [
  {
    category: "nu",
    date: "Miércoles 04 de Septiembre ",
    amount: 150000,
    img: "../../../../../src/assets/svg/nu.svg",
  },
  {
    category: "nu",
    date: "Miércoles 04 de Septiembre ",
    amount: 120000,
    img: "../../../../../src/assets/svg/nu.svg",
  },
  {
    category: "visa",
    date: "Martes 19 de Septiembre",
    amount: 500000,
    img: "../../../../../src/assets/svg/visa.svg",
  },
  {
    category: "visa",
    date: "Domingo 27 de Septiembre",
    amount: 200000,
    img: "../../../../../src/assets/svg/visa.svg",
  },
];

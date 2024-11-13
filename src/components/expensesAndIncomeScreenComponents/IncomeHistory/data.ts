export type Category = "visa" | "nu";

import nuSvg from '../../../assets/desktop/svg/nu.svg'
import visaSvg from '../../../assets/desktop/svg/visa.svg'

export interface Expense {
  category: Category;
  date: string;
  amount: number;
  img?: string;
}

//Esta data hay que pasarla hay que pasarla al redux

export const expenses: Expense[] = [
  {
    category: "nu",
    date: "Miércoles 04 de Septiembre ",
    amount: 150000,
    img: nuSvg,
  },
  {
    category: "nu",
    date: "Miércoles 04 de Septiembre ",
    amount: 120000,
    img: nuSvg,
  },
  {
    category: "visa",
    date: "Martes 19 de Septiembre",
    amount: 500000,
    img: visaSvg,
  },
  {
    category: "visa",
    date: "Domingo 27 de Septiembre",
    amount: 200000,
    img: visaSvg,
  },
];

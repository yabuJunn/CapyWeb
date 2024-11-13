export type Category = "visa" | "nu";

import nuSvg from '../../../assets/desktop/svg/nu.svg'
import visaSvg from '../../../assets/desktop/svg/visa.svg'

export enum incomeCategory {
  cards = "Cards",
  visa = "Visa",
  nu = "Nu"
}

export interface incomeHistoryType {
  category: incomeCategory;
  date: string;
  amount: number;
  img?: string;
}

//Esta data hay que pasarla hay que pasarla al redux

export const incomesHistory: incomeHistoryType[] = [
  {
    category: incomeCategory.nu,
    date: "Miércoles 04 de Septiembre ",
    amount: 150000,
    img: nuSvg,
  },
  {
    category: incomeCategory.nu,
    date: "Miércoles 04 de Septiembre ",
    amount: 120000,
    img: nuSvg,
  },
  {
    category: incomeCategory.visa,
    date: "Martes 19 de Septiembre",
    amount: 500000,
    img: visaSvg,
  },
  {
    category: incomeCategory.visa,
    date: "Domingo 27 de Septiembre",
    amount: 200000,
    img: visaSvg,
  },
];

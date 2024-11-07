export type Category = "visa" | "nu";

export interface Expense {
  category: Category;
  date: string;
  amount: number;
  img?: string;
}

import nuImage from '../../../../assets/desktop/svg/nu.svg'
import visaImage from '../../../../assets/desktop/svg/visa.svg'

export const expenses: Expense[] = [
  {
    category: "nu",
    date: "Miércoles 04 de Septiembre ",
    amount: 150000,
    img: nuImage,
  },
  {
    category: "nu",
    date: "Miércoles 04 de Septiembre ",
    amount: 120000,
    img: nuImage,
  },
  {
    category: "visa",
    date: "Martes 19 de Septiembre",
    amount: 500000,
    img: visaImage,
  },
  {
    category: "visa",
    date: "Domingo 27 de Septiembre",
    amount: 200000,
    img: visaImage,
  },
];

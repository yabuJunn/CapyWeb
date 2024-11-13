export type Category = "category" | "home" | "market" | "clothes";

export enum expensesCategory {
  category = "Category",
  home = "Home",
  market = "Market",
  clothes = "Clothes"
}

import cartSvg from '../../../assets/desktop/svg/cart.svg'
import shoppingSvg from '../../../assets/desktop/svg/shopping.svg'
import homeSvg from '../../../assets/desktop/svg/home.svg'

export interface Expense {
  category: expensesCategory;
  place: string;
  date: string;
  amount: number;
  img?: string;
}

//Esta data hay que pasarla hay que pasarla al redux

export const expenses: Expense[] = [
  {
    category: expensesCategory.market,
    place: "Éxito",
    date: "12-10",
    amount: 150000,
    img: cartSvg
  },
  {
    category: expensesCategory.market,
    place: "Carulla",
    date: "15-09",
    amount: 120000,
    img: cartSvg
  },
  {
    category: expensesCategory.clothes,
    place: "Zara",
    date: "20-07",
    amount: 110000,
    img: shoppingSvg
  },
  {
    category: expensesCategory.clothes,
    place: "Stradivarius",
    date: "20-07",
    amount: 80000,
    img: shoppingSvg
  },
  {
    category: expensesCategory.home,
    place: "Homecenter",
    date: "02-10",
    amount: 500000,
    img: homeSvg
  },
  {
    category: expensesCategory.home,
    place: "Cristalería La 13",
    date: "10-09",
    amount: 200000,
    img: homeSvg
  },
];
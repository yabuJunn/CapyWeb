export type Category = "home" | "market" | "clothes";

import cartSvg from '../../../assets/desktop/svg/cart.svg'
import shoppingSvg from '../../../assets/desktop/svg/shopping.svg'
import homeSvg from '../../../assets/desktop/svg/home.svg'

export interface Expense {
  category: Category;
  place: string;
  date: string;
  amount: number;
  img?: string;
}

//Esta data hay que pasarla hay que pasarla al redux

export const expenses: Expense[] = [
  {
    category: "market",
    place: "Éxito",
    date: "12-10",
    amount: 150000,
    img: cartSvg
  },
  {
    category: "market",
    place: "Carulla",
    date: "15-09",
    amount: 120000,
    img: cartSvg
  },
  {
    category: "clothes",
    place: "Zara",
    date: "20-07",
    amount: 110000,
    img: shoppingSvg
  },
  {
    category: "clothes",
    place: "Stradivarius",
    date: "20-07",
    amount: 80000,
    img: shoppingSvg
  },
  {
    category: "home",
    place: "Homecenter",
    date: "02-10",
    amount: 500000,
    img: homeSvg
  },
  {
    category: "home",
    place: "Cristalería La 13",
    date: "10-09",
    amount: 200000,
    img: homeSvg
  },
];
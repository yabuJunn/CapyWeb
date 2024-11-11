export type Category = "home" | "market" | "clothes";

export interface Expense {
  category: Category;
  place: string;
  date: string;
  amount: number;
  img?: string;
}

import cartImage from '../../../../assets/desktop/svg/cart.svg'
import shoopingImage from '../../../../assets/desktop/svg/shopping.svg'
import home from '../../../../assets/desktop/svg/home.svg'

export const expenses: Expense[] = [
  {
    category: "market",
    place: "Éxito",
    date: "12-10",
    amount: 150000,
    img: cartImage
  },
  {
    category: "market",
    place: "Carulla",
    date: "15-09",
    amount: 120000,
    img: cartImage
  },
  {
    category: "clothes",
    place: "Zara",
    date: "20-07",
    amount: 110000,
    img: shoopingImage
  },
  {
    category: "clothes",
    place: "Stradivarius",
    date: "20-07",
    amount: 80000,
    img: shoopingImage
  },
  {
    category: "home",
    place: "Homecenter",
    date: "02-10",
    amount: 500000,
    img: home
  },
  {
    category: "home",
    place: "Cristalería La 13",
    date: "10-09",
    amount: 200000,
    img: home
  },
];
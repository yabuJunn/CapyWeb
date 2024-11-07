import { Timestamp } from "firebase/firestore"

export interface expensesSliceType {
    expenses: Array<expenseType>
}

enum expenseNameCategories {
    hogar = "Hogar",
    mercado = "Mercado",
    ropa = "Ropa",
    salidas = "Salidas",
    viajes = "Viajes",
    familia = "Familia",
    Amigos = "Amigos",
    otro = "Otro"
}

interface expenseType {
    expenseCategory: expenseNameCategories,
    expenseSite: string,
    expenseDate: Timestamp,
    expenseAmount: number
}


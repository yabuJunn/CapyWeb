import { Timestamp } from "firebase/firestore"

export interface incomesSliceType {
    incomes: Array<incomeType>
}

interface incomeType {
    incomeCategory: incomeNameCategories,
    incomeEntrie: incomeNameEntries,
    incomeDate: Timestamp,
    incomeAmount: number
}

enum incomeNameCategories {
    work = "Work",
    freelance = "Freelance"
}

enum incomeNameEntries {
    nu = "NU",
    masterCard = "MasterCard",
    visa = "VISA",
    efectivo = "Efectivo",
    debito = "Debito",
    otro = "Otro"
}
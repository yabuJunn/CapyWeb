import { plannedExpenseType, realExpenseType } from "../store/expenses/types"
import { realIncomeType } from "../store/incomes/types"
import { exchangeType, missionType, saverLevelsNames } from "../store/rewards/types"
import { savingType } from "../store/savings/types"
import { cardType } from "../store/userData/types"

export interface userDataFromFirebaseType {
    name: string,
    email: string,
    userUID: string,
    totalBalance: number,
    totalExpenses: number,
    totalIncome: number,
    totalSavings: number,
    saverLevel: {
        saverLevelName: saverLevelsNames,
        userExpGained: number,
        accumulatedCapypoints: number
    },
    realExpenses: Array<realExpenseType>
    realIncomes: Array<realIncomeType>,
    plannedExpenses: Array<plannedExpenseType>
    cards: Array<cardType>,
    exchangeData: Array<exchangeType>,
    missionsData: Array<missionType>,
    savingsData: Array<savingType>
}
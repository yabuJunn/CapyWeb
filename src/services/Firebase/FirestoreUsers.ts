// Required for side-effects
import "firebase/firestore";

import { doc, getDoc, getFirestore, setDoc, Timestamp } from "firebase/firestore";
import { app } from "./Firebase";
import { exchangeNameEnum, saverLevelsNames } from "../../store/rewards/types";
import { expenseNameCategories } from "../../store/expenses/types";
import { incomeNameCategories, incomeNameEntries } from "../../store/incomes/types";
import { cardNamesEnum } from "../../store/userData/types";
import { userDataFromFirebaseType } from "../../types/firebaseUserTypes";


const db = getFirestore(app);

export const getUser = async (userUID: string) => {
    const docRef = doc(db, "users", userUID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

export const getRealUser = async (userUID: string) => {
    const docRef = doc(db, "realUsers", userUID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as userDataFromFirebaseType;
    } else {
        console.log("No such document!");
    }
}

export const createUser = async (userUIDForm: string, nameForm: string, emailForm: string) => {
    await setDoc(doc(db, "users", userUIDForm), {
        name: nameForm,
        email: emailForm,
        userUID: userUIDForm,
        totalBalance: 0,
        totalExpenses: 0,
        totalIncome: 0,
        savings: 0,
        playerLevel: {
            playerLevelName: "Novice",
            playerExp: 0,
            expToNextLevel: 100
        },
        expenses: {},
        income: {},
        cards: {}
    });

    const docRef = doc(db, "users", userUIDForm);
    const data = await getDoc(docRef);
    return data.data()
}

export const createFinalUser = async (userUIDForm: string, nameForm: string, emailForm: string) => {
    await setDoc(doc(db, "realUsers", userUIDForm), {
        name: nameForm,
        email: emailForm,
        userUID: userUIDForm,
        totalBalance: 0,
        totalExpenses: 0,
        totalIncome: 0,
        totalSavings: 0,
        saverLevel: {
            saverLevelName: saverLevelsNames.level1,
            userExpGained: 0,
            accumulatedCapypoints: 0
        },
        realExpenses: [],
        realIncomes: [],
        plannedExpenses: [],
        cards: [],
        exchangeData: [],
        missionsDatas: [],
        savingsData: []
    });

    const docRef = doc(db, "users", userUIDForm);
    const data = await getDoc(docRef);
    return data.data()
}

export const createPruebaUser = async (userUIDForm: string, nameForm: string, emailForm: string) => {
    await setDoc(doc(db, "realUsers", userUIDForm), {
        name: nameForm,
        email: emailForm,
        userUID: userUIDForm,
        totalBalance: 550000,
        totalExpenses: 0,
        totalIncome: 0,
        totalSavings: 0,
        saverLevel: {
            saverLevelName: saverLevelsNames.level1,
            userExpGained: 0,
            accumulatedCapypoints: 0
        },
        realExpenses: [
            {
                expenseCategory: expenseNameCategories.viajes,
                expenseSite: "Hotel Playa",
                expenseDate: Timestamp.fromDate(new Date("2024-11-05")),
                expenseAmount: 500,
                expenseEntrie: incomeNameEntries.masterCard
            },
            {
                expenseCategory: expenseNameCategories.familia,
                expenseSite: "Regalo familiar",
                expenseDate: Timestamp.fromDate(new Date("2024-11-10")),
                expenseAmount: 200,
                expenseEntrie: incomeNameEntries.visa
            }
        ],
        realIncomes: [
            {
                incomeCategory: incomeNameCategories.work,
                incomeEntrie: incomeNameEntries.nu,
                incomeDate: Timestamp.fromDate(new Date("2024-9-10")),
                incomeAmount: 3500,
                incomeColor: "#2D18BF"
            },
            {
                incomeCategory: incomeNameCategories.freelance,
                incomeEntrie: incomeNameEntries.masterCard,
                incomeDate: Timestamp.fromDate(new Date("2024-10-15")),
                incomeAmount: 1500,
                incomeColor: "#F9F9F9"
            }
        ],
        plannedExpenses: [
            {
                expenseCategory: expenseNameCategories.viajes,
                expenseSite: "Hotel Playa",
                expenseDate: Timestamp.fromDate(new Date("2024-11-05")),
                expenseAmount: 500,
                expenseEntrie: incomeNameEntries.masterCard
            },
            {
                expenseCategory: expenseNameCategories.familia,
                expenseSite: "Regalo familiar",
                expenseDate: Timestamp.fromDate(new Date("2024-11-10")),
                expenseAmount: 200,
                expenseEntrie: incomeNameEntries.visa
            }
        ],
        cards: [
            {
                cardName: cardNamesEnum.nu,
                cardNumber: 2398,
                cardMoney: 30000
            },
            {
                cardName: cardNamesEnum.visa,
                cardNumber: 1864,
                cardMoney: 12000
            }
        ],
        exchangeData: [
            {
                name: exchangeNameEnum.amazon,
                redemptionCapypointsAmount: 1000,
                redemptionCost: 10000,
                isRedeemed: false,
                exchangeId: 0,
                backgroundColor: '#4A00E0',
                darkText: false
            },
            {
                name: exchangeNameEnum.netflix,
                redemptionCapypointsAmount: 1500,
                redemptionCost: 25000,
                isRedeemed: false,
                exchangeId: 1,
                backgroundColor: '#F2622E',
                darkText: false
            }
        ],
        missionsDatas: [
            {
                missionName: "Reduce costs",
                missionDescription: "Limit spending on entertainment and non-essential purchases to 15% of the monthly budget.",
                missionColor: "#2D18BF",
                missionCapypoints: 500,
                completed: false,
                missionId: 0,
                missionExp: 300
            },
            {
                missionName: "Save some money",
                missionDescription: "Save a specific amount at the end of each week (e.g. save $5 each week).",
                missionColor: "#CCFC56",
                missionCapypoints: 1000,
                completed: false,
                missionId: 1,
                missionExp: 360
            }
        ],
        savingsData: [
            {
                savingName: "Party",
                savingValue: 100000,
                savingColor: "#2D18BF",
                monthlySaving: 50000,
                savingActualFee: 100000,
                savingTotalFee: 600000,
                savingHistory: [
                    {
                        date: Timestamp.fromDate(new Date("2024-9-04")),
                        deposit: 50000
                    },
                    {
                        date: Timestamp.fromDate(new Date("2024-8-04")),
                        deposit: 50000
                    }
                ]
            }
        ]
    });

    const docRef = await doc(db, "realUsers", userUIDForm);
    const data = await getDoc(docRef);

    if (!data.exists()) {
        console.error("El documento no existe.");
        return null;
    }

    const dataJson = data.data() as userDataFromFirebaseType;
    return dataJson;
}


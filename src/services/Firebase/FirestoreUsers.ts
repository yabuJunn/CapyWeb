// Required for side-effects
import "firebase/firestore";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./Firebase";
import { saverLevelsNames } from "../../store/rewards/types";


const db = getFirestore(app);

export const getUser = async (userUID: string) => {
    const docRef = doc(db, "users", userUID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
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
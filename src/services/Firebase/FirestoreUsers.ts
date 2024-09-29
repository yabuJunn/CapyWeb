import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "./Firebase";


const db = getFirestore(app);

export const getUser = async (userId: string) => {
    console.log("Prueba getUser")
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    console.log(docSnap)

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
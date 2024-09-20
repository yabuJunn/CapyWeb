import { auth } from "./Firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};


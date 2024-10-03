import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../Firebase/Firebase"
import { onAuthStateChanged } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserloggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
}, [])

async function initializeUser(user) {
    if (user) {
        setCurrentUser({ ...user });
        setUserloggedIn(true);
    } else {
        setCurrentUser(null);
        setUserloggedIn(false);
    }
    setLoading(false);
}

const value = {
    currentUser,
    userLoggedIn,
    loading
}

return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)
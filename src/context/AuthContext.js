'use client'
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "@/firebase/firebase";
import FullLoadder from "@/components/Loader/FullLoadder";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signInWithGoogle = async () => {
        const auth = getAuth(firebaseApp);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: "select_account"
        });

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setCurrentUser(user);
        } catch (error) {
            // Handle login error
            console.error("Error during login:", error);
        }
    };

    const value = {
        currentUser,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <FullLoadder /> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

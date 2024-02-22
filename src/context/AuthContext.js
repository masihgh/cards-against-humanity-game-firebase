'use client'
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "@/firebase/firebase";
import { Spinner } from "@material-tailwind/react";

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
      {loading ? (
        <>
        <Spinner className="h-16 w-16 text-gray-900/50" />
        </>
      ) : (children)}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

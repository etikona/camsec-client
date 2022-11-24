import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // Create User
    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Creating user with Google
    const google = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // Login User
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //  Log out User
    const logOut = () => {
        return signOut(auth)
    }


    //  Unsubscribed
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                 setUser(currentUser);
                 setLoading(false)
             })
             return () => unsubscribe();
         },[])
    
    const authInfo = {
        user,
         signIn,
         google,
         login,
         logOut
    }
    return (
        <div>
           <AuthContext.Provider value={authInfo} >
            {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
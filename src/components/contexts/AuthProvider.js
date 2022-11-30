import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // Create User
    const signIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Creating user with Google
    const google = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Login User
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //  Update User 
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
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
         updateUserProfile ,
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
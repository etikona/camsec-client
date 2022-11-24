import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

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
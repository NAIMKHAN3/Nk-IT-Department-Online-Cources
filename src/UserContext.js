import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from './firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Naim khan' });

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    return (
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
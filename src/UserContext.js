import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from './firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const updateNamePhoto = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const githubSign = () => {
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubcribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={{ user, githubSign, signUp, logIn, logOut, signInGoogle, updateNamePhoto }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
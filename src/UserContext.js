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
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateNamePhoto = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile);
    }
    const githubSign = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubcribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={{ user, loading, githubSign, signUp, logIn, logOut, signInGoogle, updateNamePhoto }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
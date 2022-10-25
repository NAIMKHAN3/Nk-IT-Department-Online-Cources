import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Naim khan' });
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
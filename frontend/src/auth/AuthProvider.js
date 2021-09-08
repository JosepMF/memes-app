import { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);
    const isLogged = () => { return !!user }
    const hasRole = user?.role;


    const context = {
        user,
        login,
        logout,
        isLogged,
        hasRole,
    }

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth, isAuth, setIsAuth] =
        usePersistedState("authToken", undefined);
    // const [isAuth, setIsAuth] = useState(false);

    const updateAuthData = (data) => {
        localStorage.setItem("authToken", data.accessToken);
        setAuth(data);
        setIsAuth(true);
    };

    const clearAuthData = () => {
        localStorage.removeItem("authToken");
        setAuth({});
        setIsAuth(false);
    };

    const authData = {
        auth,
        setAuth,
        isAuth,
        setIsAuth,
        updateAuthData,
        clearAuthData,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

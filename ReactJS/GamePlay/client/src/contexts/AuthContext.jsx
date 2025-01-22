import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth, isAuth, setIsAuth] =
        usePersistedState("authToken", "");

    const updateAuthData = (data) => {
        console.log("in auth cont - data - ", data);
        console.log(
            "in auth cont - data.token - ",
            data.accessToken
        );

        localStorage.setItem("authToken", data.accessToken);
        // temp not keeping full user data -
        setAuth(data.accessToken);
        setIsAuth(true);
    };

    const clearAuthData = () => {
        localStorage.removeItem("authToken");
        setAuth("");
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

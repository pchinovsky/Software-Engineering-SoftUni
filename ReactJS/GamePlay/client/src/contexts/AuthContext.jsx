import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    const updateAuthData = (data) => {
        localStorage.setItem("authToken", data.accessToken);
        setAuth(data);
        setIsAuth(true);
    };

    const authData = {
        auth,
        setAuth,
        isAuth,
        updateAuthData,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

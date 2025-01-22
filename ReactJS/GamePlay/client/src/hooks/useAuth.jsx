import { useState, useContext } from "react";
import authApi from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

function useLogin() {
    const [error, setError] = useState(null);
    const { updateAuthData } = useContext(AuthContext);
    const log = async (data) => {
        try {
            const authData = await authApi.login(data);
            updateAuthData(authData);
        } catch (err) {
            setError(err);
        }
    };

    return log;
}

function useRegister() {
    const [error, setError] = useState(null);
    const { updateAuthData } = useContext(AuthContext);
    const reg = async (data) => {
        try {
            const authData = await authApi.register(data);
            updateAuthData(authData);
        } catch (err) {
            setError(err);
        }
    };

    return reg;
}

function useLogout() {
    const { clearAuthData } = useContext(AuthContext);
    const logout = async () => {
        try {
            await authApi.logout();
            clearAuthData();
        } catch (error) {
            console.alert(error);
        }
    };

    return logout;
}

export { useLogin, useRegister, useLogout };

import { useState } from "react";
import authApi from "../api/auth-api";

function useLogin() {
    const [error, setError] = useState(null);
    const log = async (data) => {
        try {
            const res = await authApi.login(data);
            console.log(res);
        } catch (err) {
            setError(err);
        }
    };

    return log;
}

export default {
    useLogin,
};

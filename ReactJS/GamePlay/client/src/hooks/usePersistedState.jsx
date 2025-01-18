import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function usePersistedState(
    key,
    initialValue
) {
    // const { setIsAuth } = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState(false);

    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            setIsAuth(true);
            return storedValue;
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, state);
    }, [key, state]);

    return [state, setState, isAuth, setIsAuth];
}

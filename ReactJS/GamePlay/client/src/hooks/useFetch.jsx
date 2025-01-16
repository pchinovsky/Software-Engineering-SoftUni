import { useState, useEffect } from "react";

const useFetch = (fetchFn, type, dependencies = []) => {
    const [data, setData] = useState(type);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await fetchFn();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, dependencies);

    return { data, loading, error };
};

export default useFetch;

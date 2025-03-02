import { useState, useEffect, useMemo } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useEvents({ filters = {} }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                let eventsQuery = query(collection(db, "events"));

                if (filters.stagedOnly) {
                    eventsQuery = query(
                        eventsQuery,
                        where("staged", "==", true)
                    );
                }

                const snapshot = await getDocs(eventsQuery);
                const fetchedEvents = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log("Fetched Events:", fetchedEvents);

                // Prevent re-render loop by only updating state if data changed
                // setEvents(prevEvents => {
                //     const isSameData = JSON.stringify(prevEvents) === JSON.stringify(fetchedEvents);
                //     return isSameData ? prevEvents : fetchedEvents;
                // });

                setEvents(fetchedEvents);

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchEvents();
    }, [JSON.stringify(filters)]); // ✅ Ensure filters do not trigger excessive re-renders

    return useMemo(
        () => ({ events, loading, error }),
        [events, loading, error]
    );
}

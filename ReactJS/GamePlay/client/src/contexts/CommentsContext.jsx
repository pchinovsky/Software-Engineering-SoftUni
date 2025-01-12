import { createContext, useState, useEffect } from "react";
import api from "../api/catalogue-api";

export const CommentsContext = createContext();

export function CommentsProvider({ children }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        (async () => {
            const comments = await api.getComments();
            setComments(comments);
        })();
    }, []);

    const getCommentsByGameId = async (gameId) => {
        const comments = await api.getComments(gameId);
        setComments(comments);
    };

    console.log("comments in context", comments);

    return (
        <CommentsContext.Provider
            value={{
                comments,
                setComments,
                getCommentsByGameId,
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
}

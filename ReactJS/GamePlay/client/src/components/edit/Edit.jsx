import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../api/catalogue-api";

export default function Edit() {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const game = await api.getGameById(gameId);
            setGame(game);
        })();
    }, [gameId]);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setGame((prevGame) => ({
            ...prevGame,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await api.editGame(game._id, game);
        navigate(`/details/${game._id}`);
    }

    return (
        <section id="edit-page" className="auth">
            <form onSubmit={handleSubmit} id="edit">
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">
                        Legendary title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={game.title}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="category">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={game.category}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="levels">
                        MaxLevel:
                    </label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={game.maxLevel}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={game.imageUrl}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="summary">
                        Summary:
                    </label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={game.summary}
                        onChange={handleInputChange}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
}

import { useState, useEffect } from "react";
import api from "../../api/catalogue-api";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [game, setGame] = useState({});
    const navigate = useNavigate();

    function handleInputChange(e) {
        const { name, value } = e.target;
        setGame((prevGame) => ({
            ...prevGame,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await api.createGame(game);
        navigate("/catalogue");
    }

    return (
        <section id="create-page" className="auth">
            <form onSubmit={handleSubmit} id="create">
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">
                        Legendary title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={game.value}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="category">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
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
                        placeholder={1}
                        value={game.maxLevel}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
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
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}

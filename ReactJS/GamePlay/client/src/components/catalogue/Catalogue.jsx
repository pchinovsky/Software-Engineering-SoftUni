import { useEffect, useState } from "react";
import api from "../../api/catalogue-api";
import Game from "./Game";

export default function Catalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const games = await api.getGames();
            setGames(games);
        })();
    }, []);
    console.log(games);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            {games.map((game) => (
                <Game key={game._id} game={game} />
            ))}
            {/* Display paragraph: If there is no games  */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}

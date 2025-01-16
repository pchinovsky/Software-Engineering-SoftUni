import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import api from "../../api/catalogue-api";

import Game from "./Game";

export default function Catalogue() {
    // const [games, setGames] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const games = await api.getGames();
    //         setGames(games);
    //     })();
    // }, []);
    // console.log(games);

    const { data: games } = useFetch(api.getGames, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 ? (
                games.map((game) => (
                    <Game key={game._id} game={game} />
                ))
            ) : (
                <h3 className="no-articles">
                    No articles yet
                </h3>
            )}
        </section>
    );
}

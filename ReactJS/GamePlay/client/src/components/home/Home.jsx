import { useState, useEffect } from "react";

import api from "../../api/catalogue-api";

import GameLatest from "../catalogue/GameLatest";

export default function Home() {
    const [games, setGames] = useState({});
    useEffect(() => {
        (async () => {
            const games = await api.getGames();
            // const games = await api.getGamesLatest();
            setGames(games.slice(-3));
            // setGames(games);
        })();
    }, []);
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img
                src="./images/four_slider_img01.png"
                alt="hero"
            />
            <div id="home-page">
                <h1>Latest Games</h1>
                {games.length > 0 ? (
                    games.map((game) => (
                        <GameLatest
                            key={game._id}
                            game={game}
                        />
                    ))
                ) : (
                    <p className="no-articles">
                        No games yet
                    </p>
                )}
            </div>
        </section>
    );
}

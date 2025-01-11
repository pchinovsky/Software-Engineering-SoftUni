import req from "./request";

const getGames = async () => Object.values(await req.get('jsonstore/games'));

const getGameById = async (id) => await req.get(`jsonstore/games/${id}`);

export default {
    getGames,
    getGameById
}

import req from "./request";

const getGames = async () => Object.values(await req.get('jsonstore/games'));

const getGameById = async (id) => await req.get(`jsonstore/games/${id}`);

const createGame = async (data) => await req.post('jsonstore/games', data);

const editGame = async (id, data) => await req.put(`jsonstore/games/${id}`, data);

const delGame = async (id) => await req.del(`jsonstore/games/${id}`);

export default {
    getGames,
    getGameById,
    createGame,
    editGame,
    delGame
}

import req from "./request";

const getGames = async () => Object.values(await req.get('jsonstore/games'));

const getComments = async () => Object.values(await req.get(`jsonstore/comments`));
// const getComments = async (gameId) => {
//     const encodedGameId = encodeURIComponent(`gameId="${gameId}"`);
//     return Object.values(await req.get(`jsonstore/comments?where=gameId%3D%22${encodedGameId}%22`));
// };

const getGameById = async (id) => await req.get(`jsonstore/games/${id}`);

const createGame = async (data) => await req.post('jsonstore/games', data);

const createComment = async (gameId, comment) => await req.post('jsonstore/comments', { gameId, comment });

const editGame = async (id, data) => await req.put(`jsonstore/games/${id}`, data);

const delGame = async (id) => await req.del(`jsonstore/games/${id}`);

export default {
    getGames,
    getGameById,
    getComments,
    createGame,
    createComment,
    editGame,
    delGame
}

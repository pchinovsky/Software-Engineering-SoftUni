import request from "./request";

const getGames = async () => Object.values(await request.get('jsonstore/games'));

export default {
    getGames
}
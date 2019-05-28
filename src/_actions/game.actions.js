import config from "config";
import { gameConstants } from "../_constants";
import { RSAA } from 'redux-api-middleware';
import { withAuth } from "../_reducers";

export const gameActions = {
    createGame,
    playGame,
    getGame
}

function createGame() {
    return dispatch => {
        dispatch({
            [RSAA]: {
                endpoint: `${config.apiUrl}/game`,
                method: 'GET',
                headers: withAuth({ 'Content-Type': 'application/json' }),
                types: [
                    gameConstants.CREATE_GAME_REQUEST,
                    gameConstants.CREATE_GAME_SUCCESS,
                    gameConstants.CREATE_GAME_FAILURE
                ]
            }
        });
    }
}

function playGame(post_data, path) {
    return dispatch => {
        dispatch({
            [RSAA]: {
                endpoint: `${config.apiUrl}/game/${path}/`,
                method: 'POST',
                headers: withAuth({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(post_data),
                types: [
                    gameConstants.PLAY_GAME_REQUEST,
                    {
                        type: gameConstants.PLAY_GAME_SUCCESS,
                        payload: () => dispatch(getGame(path))
                    },
                    gameConstants.PLAY_GAME_FAILURE
                ]
            }
        });
    }
}

function getGame(path) {
    return dispatch => {
        dispatch({
            [RSAA]: {
                endpoint: `${config.apiUrl}/game/${path}/`,
                method: 'GET',
                headers: withAuth({ 'Content-Type': 'application/json' }),
                types: [
                    gameConstants.GET_GAME_REQUEST,
                    gameConstants.GET_GAME_SUCCESS,
                    gameConstants.GET_GAME_FAILURE
                ]
            }
        });
    }
}
import { gameConstants } from "../_constants";

const initialState = {
    data: "",
    loading: false,
    error: null
}

export function game(state = initialState, action) {
    switch(action.type) {
        case gameConstants.CREATE_GAME_REQUEST:
            return {
                ...state,
                loading: true
            };

        case gameConstants.CREATE_GAME_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        case gameConstants.CREATE_GAME_FAILURE:
            return {
                ...state,
                error: action.error,
                data: action.payload
            };

        case gameConstants.PLAY_GAME_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };

        case gameConstants.PLAY_GAME_FAILURE:
            return {
                ...state,
                error: action.error,
                data: action.payload
            };

        default:
            return state;
    }
}
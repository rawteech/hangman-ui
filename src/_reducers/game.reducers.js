import { gameConstants } from "../_constants";

const initialState = {
    data: "",
    loading: false,
    error: null
}

export function game(state = initialState, action) {
    switch(action.type) {
        case gameConstants.GET_GAME_REQUEST:
            return {
                ...state,
                loading: true
            };

        case gameConstants.GET_GAME_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        case gameConstants.GET_GAME_FAILURE:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}
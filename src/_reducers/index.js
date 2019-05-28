import { combineReducers } from "redux";

// Reducers
import { game } from "./game.reducers";

const rootReducer = combineReducers({
    game
});

export default rootReducer;

let credentials = JSON.parse(localStorage.getItem('credentials'));

export function withAuth(headers = {}) {
    return (state) => ({
        ...headers,
        'Authorization': 'Bearer ' + credentials.access
    })
}

import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from "../_reducers";

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(
            apiMiddleware, thunk, loggerMiddleware
        )
    )
}

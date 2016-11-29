import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import mainReducer from '../ducks/main';

const logger = createLogger();

const middlewares = [
    thunkMiddleware,
    logger
];

const rootReducer = combineReducers({
    main: mainReducer
});

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : (f) => { return f; }
    ));
    return store;
}

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

const middlewares = [
    thunkMiddleware,
    logger
];

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    ));
    return store;
}
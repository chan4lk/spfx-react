import { Store, createStore as reduxCreateStore, compose, applyMiddleware } from 'redux';
import * as createLogger from 'redux-logger';
import { rootReducer, IState } from '../reducers';

export { IState } from '../reducers';

export function createStore(initialState?:IState) : Store<IState> {
    const loggerMiddleware = createLogger();

    const middlewares = [
        loggerMiddleware
    ];

    return reduxCreateStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    ));
}
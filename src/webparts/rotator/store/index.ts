import { Store, createStore as reduxCreateStore, compose, applyMiddleware } from 'redux';
import * as createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer, IState } from '../reducers';
export { IState } from '../reducers';

export function createStore(initialState?:IState) : Store<IState> {
    const loggerMiddleware = createLogger();
    const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares = [
        thunk,
        loggerMiddleware
    ];

    return reduxCreateStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));
}
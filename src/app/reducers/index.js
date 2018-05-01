import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import appReducer from './AppReducer';

const reducers = combineReducers({
    app: appReducer,
});

let middleWare = [
    thunkMiddleware
];

const store = createStore(
    reducers,
    applyMiddleware(...middleWare)
);

export default store;

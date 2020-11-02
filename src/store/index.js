import { createStore, combineReducers } from 'redux';
import { serverListReducer } from './store';

const rootReducer = combineReducers({
    servers: serverListReducer,
});

export const store = createStore(
    rootReducer,
);

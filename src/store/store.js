import { SERVER_LIST_ACTIONS } from './actions';

export const DEFAULT_STATE = [];

export const serverListReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SERVER_LIST_ACTIONS.SET_SERVER_LIST:
            return action.payload.sort((a, b) => a.distance - b.distance || a.name.localeCompare(b.name));
        default:
            return state;
    }
};

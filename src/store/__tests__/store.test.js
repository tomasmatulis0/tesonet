import { SERVER_LIST_ACTIONS } from '../actions';
import { serverListReducer } from '../store';

describe('serverListReducer', () => {
    test(`should handle ${SERVER_LIST_ACTIONS.SET_SERVER_LIST} action`, () => {
        const initialState = [];
        const server = { distance: 1, name: 'server' };
        const action = {
            type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
            payload: [server],
        };
        expect(serverListReducer(initialState, action).length).toBe(1);
        expect(serverListReducer(initialState, action)[0].name).toBe('server');
        expect(serverListReducer(initialState, action)[0].distance).toBe(1);
    });

    test(`should sort servers by distance and name for ${SERVER_LIST_ACTIONS.SET_SERVER_LIST} action`, () => {
        const initialState = [];
        const server1 = { distance: 1, name: 'server1' };
        const server2 = { distance: 2, name: 'server2' };
        const action = {
            type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
            payload: [server2, server1],
        };
        expect(serverListReducer(initialState, action).length).toBe(2);
        expect(serverListReducer(initialState, action)[0]).toEqual(server1);
        expect(serverListReducer(initialState, action)[1]).toEqual(server2);
    });
});

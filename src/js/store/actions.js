export const SERVER_LIST_ACTIONS = {
    SET_SERVER_LIST: 'SERVER_LIST_ACTIONS/SET_SERVER_LIST',
};

export const setServerList = payload => ({
    type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
    payload,
});

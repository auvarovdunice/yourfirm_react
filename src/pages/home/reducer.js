import immutable from 'seamless-immutable';
import {
    SAVE_CURRENT_USER,
    CLEAR_CURRENT_USER,
    ERROR_LOGIN,
    PASSWORD_UPDATED,
    SEND_CODE,
    SAVE_USER_UPDATE_INFO,
    GET_AWARDS,
    SET_AWARDS
} from './constants';

export const actionTypes = {};

const initialState = immutable({
    isAuthenticated: false,
    currentUser: null,
    updateStatus: {approved: false},
    awards: []
});
const HANDLERS = {
    [GET_AWARDS]: (state, action) => ({
        ...state
    }),
    [SET_AWARDS]: (state, action) => {
        return ({
            ...state,
            awards: action.payload
        })
    }
};


export default function homeReducer(state = initialState, action) {
    const handler = HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

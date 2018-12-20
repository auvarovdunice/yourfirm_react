import immutable from 'seamless-immutable';
import {
  SAVE_CURRENT_USER,
  CLEAR_CURRENT_USER,
  ERROR_LOGIN,
  PASSWORD_UPDATED,
  SEND_CODE, SAVE_USER_UPDATE_INFO
} from './constants';
export const actionTypes = {};

const initialState = immutable({
  isAuthenticated: false,
  currentUser: null,
  updateStatus: { approved:false }
});
const HANDLERS = {
  [SAVE_CURRENT_USER]: (state, action) => ({
    ...state,
    currentUser: action.payload,
    isAuthenticated: true,
  }),
  [CLEAR_CURRENT_USER]: (state) => ({
    ...state,
    currentUser: null,
    isAuthenticated: false,
    status: {}
  }),
  [ERROR_LOGIN]: (state, action) => ({
    ...state,
    currentUser: action.payload,
    isAuthenticated: false,
  }),
  [PASSWORD_UPDATED]:(state, action) => ({
    ...state,
    currentUser: action.payload,
    isAuthenticated: false,
  }),
  [SEND_CODE]:(state, action) => ({
    ...state,
    status: action.payload,
    isAuthenticated: false,
  }),
  [SAVE_USER_UPDATE_INFO]:(state, action) => ({
    ...state,
    updateStatus: action.payload,
  })
};



export default function authReducer(state = initialState, action) {
  const handler = HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

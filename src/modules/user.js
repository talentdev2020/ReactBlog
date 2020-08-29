import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
export const LOGOUT = 'user/LOGOUT';
const [CHECK, CHECK_SUCCESS] = createRequestActionTypes('user/CHECK');

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);

// check if the current user token is valid
export const check = createAction(CHECK);

export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),

    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

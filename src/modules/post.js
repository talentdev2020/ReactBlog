import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

const [READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes(
  'post/READ_POST',
);
const UNLOAD_POST = 'post/UNLOAD_POST'; //

export const unloadPost = createAction(UNLOAD_POST);

export function* postSaga() {}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default post;

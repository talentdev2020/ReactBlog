import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

const initialState = {
  title: '',
  body: '',
  post: null,
  user: { username: '', useremail: '' },
  postError: null,
};

export const WRITE_POST = 'write/WRITE_POST';

// initialize the value
export const initialize = createAction(INITIALIZE);

// change value of the key
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

// create the post
export const writePost = createAction(WRITE_POST, ({ title, body, user }) => ({
  title,
  user,
  body,
}));

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state, { payload: post }) => ({
      ...state,
      post: post,
      postError: null,
    }),
  },
  initialState,
);

export default write;

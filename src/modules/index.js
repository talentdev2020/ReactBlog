import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import write from './write';
import posts from './posts';

const rootReducer = combineReducers({
  auth,
  user,
  write,
  posts,
});
export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
export default rootReducer;

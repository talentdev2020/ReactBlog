import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { WRITE_POST } from './write';

import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';
const SEARCH_POSTS = 'search/Posts';
const SHOW_ALLPOSTS = 'show/AllPosts';
const DELETE_POST = 'delete/post';
const REPLY_POST = 'reply/post';
const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');
export const searchPosts = createAction(SEARCH_POSTS, (key) => key);
export const deletePost = createAction(DELETE_POST, (id) => id);
export const showAllPosts = createAction(SHOW_ALLPOSTS);
export const replyPost = createAction(REPLY_POST, ({ text, postId, user }) => ({
  text,
  postId,
  user,
}));
export const listPosts = createAction(
  LIST_POSTS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  posts: [
    {
      _id: 1,
      title: 'But it may keep some time.',
      body:
        ' <b>But pleasure is easy, however, that the Blessed Virgin, or it is nothing at all.</b>',
      user: { username: 'test user', useremail: 'test@gmail.com' },
      publishedDate: '2020-04-29',
      replies: [
        { username: 'Anton', useremail: 'anton@gmail.com', text: 'thanks' },
      ],
    },
    {
      _id: 2,
      title: 'Provident Ancestours, as they will unfold.',
      body:
        ' <b><div>Annoyance or pleasure is pleasure. Due to the advantage of it because it has From and distinctness of who is who.</div><div> And let them be here, are not the whole of Dolor, all the. </div>Because it is the pleasure of him, accusing him of life when the consequences of this.</b>',
      user: { username: 'test user', useremail: 'test@gmail.com' },
      publishedDate: '2020-04-29',
      replies: [
        { username: 'Richard', useremail: 'ricahrd@gmail.com', text: 'great' },
      ],
    },
    {
      _id: 3,
      title: 'This is because they refuse to choose when they have fallen.',
      body:
        ' <b>Dignissimos blind are suffering the consequences of all that flattering pleasure for pleasure</b>',
      user: { username: 'test user', useremail: 'test@gmail.com' },
      publishedDate: '2020-04-29',
      replies: [
        { username: 'John', useremail: 'john@gmail.com', text: 'perfect' },
      ],
    },
  ],
  allPosts: [
    {
      _id: 1,
      title: 'But it may keep some time.',
      body:
        ' <b>But pleasure is easy, however, that the Blessed Virgin, or it is nothing at all.</b>',
      user: { username: 'test user', useremail: 'test@gmail.com' },
      publishedDate: '2020-04-29',
      replies: [
        { username: 'Anton', useremail: 'anton@gmail.com', text: 'thanks' },
      ],
    },
    {
      _id: 2,
      title: 'Provident Ancestours, as they will unfold.',
      body:
        ' <b><div>Annoyance or pleasure is pleasure. Due to the advantage of it because it has From and distinctness of who is who.</div><div> And let them be here, are not the whole of Dolor, all the. </div>Because it is the pleasure of him, accusing him of life when the consequences of this.</b>',
      user: { username: 'test user', useremail: 'test@gmail.com' },
      publishedDate: '2020-04-29',
      replies: [
        { username: 'Richard', useremail: 'ricahrd@gmail.com', text: 'great' },
      ],
    },
    {
      _id: 3,
      title: 'This is because they refuse to choose when they have fallen.',
      body:
        ' <b>Dignissimos blind are suffering the consequences of all that flattering pleasure for pleasure</b>',
      user: { username: 'test user', useremail: 'test@gmail.com' },
      publishedDate: '2020-04-29',
      replies: [
        { username: 'John', useremail: 'john@gmail.com', text: 'perfect' },
      ],
    },
  ],
  error: null,
};
let len = 3;
const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SHOW_ALLPOSTS]: (state) => ({
      ...state,
      posts: state.allPosts,
    }),
    [REPLY_POST]: (state, { payload: reply }) => {
      const { text } = reply;
      const { username, useremail } = reply.user;

      let allPosts = state.allPosts;
      let posts = state.posts;

      posts = posts.map((post) => {
        if (post._id === reply.postId) {
          post.replies.push({ text, username, useremail });
        }
        return post;
      });
      return {
        ...state,
        allPosts,
        posts,
      };
    },
    [DELETE_POST]: (state, { payload: id }) => {
      const allPosts = state.allPosts.filter((item) => item._id !== id);
      const posts = state.posts.filter((item) => item._id !== id);
      return {
        ...state,
        allPosts,
        posts,
      };
    },
    [SEARCH_POSTS]: (state, { payload: key }) => {
      const search_key = key.toUpperCase();
      const posts = state.allPosts.filter(
        (item) =>
          item.title.toUpperCase().includes(search_key) ||
          item.body.toUpperCase().includes(search_key) ||
          item.user.username.toUpperCase().includes(search_key) ||
          item.user.useremail.toUpperCase().includes(search_key),
      );
      return {
        ...state,
        posts,
      };
    },

    [WRITE_POST]: (state, { payload: post }) => {
      const allPosts = state.allPosts;
      post.replies = [];
      len++;
      post._id = len;
      post.publishedDate = new Date().toDateString();
      allPosts.unshift(post);

      return {
        ...state,
        allPosts,
        posts: allPosts,
        replies: [],
      };
    },
  },

  initialState,
);

export default posts;

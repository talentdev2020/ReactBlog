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
      title: 'Sample title1',
      body: '<p>Sample1</p> <b>body1</b>',
      user: { username: 'test user', useremail: 'text email' },
      publishedDate: '2020-04-29',
      replies: [{ username: 'aa', useremail: 'aaa', text: 'dsdsd' }],
    },
    {
      _id: 2,
      title: 'Sample title2',
      body: '<p>Sample2</p> <b>body2</b>',
      user: { username: 'test user', useremail: 'text email' },
      publishedDate: '2020-04-29',
      replies: [{ username: 'aa', useremail: 'aaa', text: 'dsdsd' }],
    },
    {
      _id: 3,
      title: 'Sample title3',
      body: '<p>Sample3</p> <b>body3</b>',
      user: { username: 'test user', useremail: 'text email' },
      publishedDate: '2020-04-29',
      replies: [{ username: 'aa', useremail: 'aaa', text: 'dsdsd' }],
    },
  ],
  allPosts: [
    {
      _id: 1,
      title: 'Sample title1',
      body: '<p>Sample1</p> <b>body1</b>',
      user: { username: 'test user', useremail: 'text email' },
      publishedDate: '2020-04-29',
      replies: [{ username: 'aa', useremail: 'aaa', text: 'dsdsd' }],
    },
    {
      _id: 2,
      title: 'Sample title2',
      body: '<p>Sample2</p> <b>body2</b>',
      user: { username: 'test user', useremail: 'text email' },
      publishedDate: '2020-04-29',
      replies: [{ username: 'aa', useremail: 'aaa', text: 'dsdsd' }],
    },
    {
      _id: 3,
      title: 'Sample title3',
      body: '<p>Sample3</p> <b>body3</b>',
      user: { username: 'test user', useremail: 'text email' },
      publishedDate: '2020-04-29',
      replies: [{ username: 'aa', useremail: 'aaa', text: 'dsdsd' }],
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
      allPosts = allPosts.map((post) => {
        if (post._id === reply.postId) {
          post.replies.push({ text, username, useremail });
        }
        return post;
      });
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
      const posts = state.allPosts.filter(
        (item) =>
          item.title.includes(key) ||
          item.body.includes(key) ||
          item.user.username.includes(key) ||
          item.user.useremail.includes(key),
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
      allPosts.push(post);

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

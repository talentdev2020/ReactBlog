import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { deletePost, replyPost } from '../../modules/posts';

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  const Delete = (id) => {
    dispatch(deletePost(id));
  };
  const Reply = (text, postId) => {
    dispatch(replyPost({ text, user, postId }));
  };
  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      user={user}
      deletePost={Delete}
      replyPost={Reply}
    />
  );
};

export default PostListContainer;

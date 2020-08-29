import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { showAllPosts, deletePost, replyPost } from '../../modules/posts';

/**
 * show all posts
 */
const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, error, user } = useSelector(({ posts, user }) => ({
    posts: posts.posts,
    user: user.user,
  }));

  useEffect(() => {
    dispatch(showAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Delete = (id) => {
    dispatch(deletePost(id));
  };

  const Reply = (text, postId) => {
    dispatch(replyPost({ text, user, postId }));
  };
  return (
    <PostList
      error={error}
      posts={posts}
      user={user}
      deletePost={Delete}
      replyPost={Reply}
    />
  );
};

export default PostListContainer;

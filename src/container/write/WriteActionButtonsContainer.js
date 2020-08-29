import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

/**
 * section of the "publish" and "cancel" buttons in creating page
 * @param {*} param0
 */
const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, user, replies, post, postError } = useSelector(
    ({ write, user }) => ({
      title: write.title,
      body: write.body,
      user: user.user,
      replies: write.replies,
      post: write.post,
      postError: write.postError,
    }),
  );

  // Create the post
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        user,
        body,
        replies,
      }),
    );
  };

  // Cancel the creating post
  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (!user) history.push(`/login`);
    if (post) {
      history.push(`/`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError, user]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);

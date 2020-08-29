import React, { useState } from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Replies from '../common/Replies';
import { Link } from 'react-router-dom';
const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

export const PostContent = styled.div`
  font-size: 1rem;
  word-break: break-all;
  color: ${palette.gray[7]};
  margin-left: 15px;
  margin-top: 15px;
`;
const Buttonsection = styled.div`
  display: flex;
  padding-top: 15px;
  flex-direction: row-reverse;
  margin: auto;
  color: ${palette.gray[8]};
  button {
    margin-right: 20px;
  }
`;

/**
 *
 * @param {object} user object which includes username and useremail
 * @param {object} post object which includes post information such as user, date, title, body
 * @param {function} deletePost function which delete the specified post
 * @param {function} replyPost function which reply the post
 *
 */
const PostItem = ({ user, post, deletePost, replyPost }) => {
  const [isReply, setIsReply] = useState(false);
  const { publishedDate, replies, title, body } = post;
  const postUser = post.user;
  const onReply = (text, postId) => {
    // setIsReply(false);
    replyPost(text, postId);
  };
  return (
    <PostItemBlock>
      <strong>
        <Link to="">
          <h2>{title}</h2>
        </Link>
      </strong>
      <SubInfo user={postUser} publishedDate={new Date(publishedDate)} />

      <PostContent dangerouslySetInnerHTML={{ __html: body }} />

      <Buttonsection>
        {user && post.user.username === user.username && (
          <Button cyan onClick={(e) => deletePost(post._id)}>
            Delete
          </Button>
        )}
        <Button cyan onClick={(e) => setIsReply(!isReply)}>
          Comments
        </Button>
      </Buttonsection>

      <Replies
        replies={replies}
        isReply={isReply}
        onReply={onReply}
        user={user}
        postId={post._id}
      />
    </PostItemBlock>
  );
};

/**
 * display the all posts
 * @param {Array} posts array of all posts
 * @param {boolean} loading the status of reading posts
 * @param {string} error the message of error
 * @param {object} user object which includes username and useremail
 * @param {function} deletePost the function which deletes the specified post
 * @param {function} replyPost the function which replies the post
 
 */
const PostList = ({ posts, loading, error, user, deletePost, replyPost }) => {
  if (error) {
    return <PostListBlock>Error.</PostListBlock>;
  }

  return (
    <PostListBlock>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem
              post={post}
              key={post._id}
              user={user}
              deletePost={deletePost}
              replyPost={replyPost}
            />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;

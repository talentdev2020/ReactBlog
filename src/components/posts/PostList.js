import React, { useState } from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Replies from '../common/Replies';

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
    margin-left: 20px;
  }
`;

/**
 * component for each post
 * @param {object} user object which includes username and useremail
 * @param {object} post object which includes post information such as user, title, body
 * @param {function} deletePost function which delete the specified post
 * @param {function} replyPost function which reply the post
 *
 */
const PostItem = ({ user, post, deletePost, replyPost }) => {
  const [isReply, setIsReply] = useState(false);
  const { replies, title, body } = post;
  const postUser = post.user;
  const onReply = (text, postId) => {
    replyPost(text, postId);
  };
  return (
    <PostItemBlock>
      {/* the title of the post */}
      <h2>{title}</h2>
      {/* username and useremail of the post */}
      <SubInfo user={postUser} />
      {/* content of the post */}
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
 * @param {string} error the message of error
 * @param {object} user object which includes username and useremail
 * @param {function} deletePost the function which deletes the specified post
 * @param {function} replyPost the function which replies the post
 
 */
const PostList = ({ posts, error, user, deletePost, replyPost }) => {
  if (error) {
    return <PostListBlock>Error.</PostListBlock>;
  }

  return (
    <PostListBlock>
      {posts && (
        <div>
          {/* display all posts */}
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

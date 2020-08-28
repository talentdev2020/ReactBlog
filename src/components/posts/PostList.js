import React, { useState } from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Replies from '../common/Replies';
import { Link } from 'react-router-dom';
import { StyledInput } from '../auth/AuthForm';
const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
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
const SearchDiv = styled.div`
  display: flex;
`;
export const PostContent = styled.div`
  font-size: 1.3125rem;
  word-break: break-all;
  color: ${palette.gray[8]};
`;
const Buttonsection = styled.div`
  width: 200px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  color: ${palette.gray[8]};
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
    setIsReply(false);
    replyPost(text, postId);
  };
  return (
    <PostItemBlock>
      <h2>
        <Link to="">{title}</Link>
      </h2>
      <SubInfo user={postUser} publishedDate={new Date(publishedDate)} />

      <PostContent dangerouslySetInnerHTML={{ __html: body }} />

      <Replies
        replies={replies}
        isReply={isReply}
        onReply={onReply}
        postId={post._id}
      />

      {user && (
        <Buttonsection>
          <Button cyan={1} onClick={(e) => setIsReply(!isReply)}>
            Replay
          </Button>
          {post.user.username === user.username && (
            <Button cyan={1} onClick={(e) => deletePost(post._id)}>
              Delete
            </Button>
          )}
        </Buttonsection>
      )}
    </PostItemBlock>
  );
};

/**
 * display the all posts
 * @param {Array} posts array of all posts
 * @param {boolean} loading the status of reading posts
 * @param {string} error the message of error
 * @param {object} user object which includes username and useremail
 * @param {function} searchPosts the function which searches the key
 * @param {function} deletePost the function which deletes the specified post
 * @param {function} replyPost the function which replies the post
 
 */
const PostList = ({
  posts,
  loading,
  error,
  user,
  searchPosts,
  deletePost,
  replyPost,
}) => {
  const [search, setSearch] = useState('');
  if (error) {
    return <PostListBlock>Error.</PostListBlock>;
  }

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  const Search = () => {
    searchPosts(search);
  };
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <SearchDiv>
          <StyledInput
            type="text"
            id="search"
            onKeyPress={(e) => {
              if (e.key === 'Enter') Search();
            }}
            onChange={(e) => changeSearch(e)}
          />
          <Button cyan onClick={(e) => Search()}>
            Search
          </Button>
        </SearchDiv>
      </WritePostButtonWrapper>

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

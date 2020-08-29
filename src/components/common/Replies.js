import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { SubInfoBlock } from './SubInfo';
import { PostContent } from '../posts/PostList';
const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
const ReplySection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
`;
const ReplyDiv = styled.div`
  margin-top: 10px;
  background-color: whitesmoke;
  border-radius: 10px;
`;
const TextArea = styled.div`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-top: 0.5rem;
  outline: none;
  width: 100%;
  margin-right: 15px;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
const Replies = ({ replies, isReply, onReply, postId, user }) => {
  const Reply = () => {
    const text = document.getElementById('replyText').innerHTML;
    document.getElementById('replyText').innerHTML = '';
    onReply(text, postId);
  };
  return (
    <TagsBlock>
      {isReply && (
        <div>
          {/* display all comments */}
          {replies.map((reply, index) => (
            <ReplyDiv key={`${postId}.${index}_${reply.username}`}>
              <PostContent dangerouslySetInnerHTML={{ __html: reply.text }} />

              <SubInfoBlock>
                <span>{reply.username}</span>
                <span>{reply.useremail}</span>
              </SubInfoBlock>
            </ReplyDiv>
          ))}

          {/* reply to the post */}
          {user && (
            <ReplySection>
              <TextArea contentEditable id="replyText"></TextArea>
              <Button cyan onClick={(e) => Reply()}>
                Post
              </Button>
            </ReplySection>
          )}
        </div>
      )}
    </TagsBlock>
  );
};

export default Replies;

import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

/**
 *
 * @param {function} onCnacel function which cancels the creating post
 * @param {function} onPublish function which creates the post
 */
const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        Create Post
      </StyledButton>
      <StyledButton onClick={onCancel}>Cancel</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;

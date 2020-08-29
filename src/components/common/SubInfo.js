import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

export const SubInfoBlock = styled.div`
  margin-left: 15px;
  font-size: 0.8rem;
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 0.5rem;
    `}
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ user, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${user.username}`}>
            {user.username}({user.useremail})
          </Link>
        </b>
      </span>
      {/* <span>{new Date(publishedDate).toLocaleDateString()}</span> */}
    </SubInfoBlock>
  );
};

export default SubInfo;

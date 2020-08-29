import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;
const Nav = styled.nav`
  width: 100%;
  height: 55px;

  padding: 0 20px;
  display: flex;
  max-width: 950px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
const AuthTemplate = ({ children }) => {
  return (
    <div>
      <Nav>
        <Link to="/">
          <strong>Back</strong>
        </Link>
      </Nav>
      <AuthTemplateBlock>
        <WhiteBox>{children}</WhiteBox>
      </AuthTemplateBlock>
    </div>
  );
};

export default AuthTemplate;

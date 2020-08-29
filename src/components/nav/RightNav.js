import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const NavButton = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-left: 15px;
`;
const Span = styled.span`
  color: gray;
  font-weight: bold;
`;
const RightNav = ({ open, user, showAllPosts, logout }) => {
  return (
    <Ul open={open}>
      <Link className="React" onClick={showAllPosts} to="/">
        <Span>Home</Span>
      </Link>

      <Link to="/write" className="Write">
        <Span>Create</Span>
      </Link>

      {user ? (
        <NavButton>
          <Button onClick={logout}>Logout</Button>
        </NavButton>
      ) : (
        <NavButton>
          <Button to="/login">Login</Button>
        </NavButton>
      )}
    </Ul>
  );
};

export default RightNav;

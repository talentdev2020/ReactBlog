import React, { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import palette from '../../lib/styles/palette';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  max-width: 950px;
  margin: auto;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  background: url('/search.png');
  background-size: contain;
  height: 30px;
  padding-left: 30px;
  background-repeat: no-repeat;
  width: 100%;
  margin: auto;
  &:focus {
    color: $oc-teal-7;
    border: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;
const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  width: 35%;
  margin-right: 50px;
`;

const Navbar = ({ user, showAllPosts, logout, searchPosts }) => {
  const [search, setSearch] = useState('');
  const changeSearch = (e) => {
    setSearch(e.target.value);
    searchPosts(e.target.value);
  };
  const Search = () => {
    searchPosts(search);
  };
  return (
    <Nav>
      <div className="logo">
        <strong>Blogs</strong>
      </div>
      <WritePostButtonWrapper>
        <StyledInput
          type="text"
          id="search"
          onKeyPress={(e) => {
            if (e.key === 'Enter') Search();
          }}
          onChange={(e) => changeSearch(e)}
        />
      </WritePostButtonWrapper>
      <Burger user={user} showAllPosts={showAllPosts} logout={logout} />
    </Nav>
  );
};

export default Navbar;

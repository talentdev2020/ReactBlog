import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import { searchPosts, showAllPosts } from '../../modules/posts';
import NavBar from '../nav/NavBar';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const Search = (key) => {
    dispatch(searchPosts(key));
  };
  const onLogout = () => {
    dispatch(logout());
  };
  const showAll = () => {
    dispatch(showAllPosts());
  };
  return (
    <NavBar
      searchPosts={Search}
      user={user}
      logout={onLogout}
      showAllPosts={showAll}
    />
  );
};

export default HeaderContainer;

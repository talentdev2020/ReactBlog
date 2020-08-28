import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';
import { showAllPosts } from '../../modules/posts';
const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const showAll = () => {
    dispatch(showAllPosts());
  };
  return <Header user={user} logout={onLogout} showAllPosts={showAll} />;
};

export default HeaderContainer;

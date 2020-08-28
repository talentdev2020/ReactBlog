import React from 'react';
import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import { Route } from 'react-router-dom';
import WritePage from './pages/WritePage';
function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={WritePage} path="/write" exact />
    </>
  );
}

export default App;

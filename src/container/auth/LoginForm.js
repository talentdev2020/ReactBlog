import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const [error, setError] = useState(null);
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, useremail } = form;
    dispatch(login({ username, useremail }));
  };
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('Error occur');
      console.log(authError);
      setError('Login failure');
      return;
    }
    if (auth) {
      console.log('login success');
      dispatch(check(auth));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('Localstorage erro');
      }
    }
  }, [history, user]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      error={error}
      onSubmit={onSubmit}
    ></AuthForm>
  );
};

export default withRouter(LoginForm);

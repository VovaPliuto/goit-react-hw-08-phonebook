import React from 'react';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;

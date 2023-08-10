import React from 'react';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;

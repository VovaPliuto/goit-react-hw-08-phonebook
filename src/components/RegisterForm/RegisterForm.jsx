import React from 'react';
import { useDispatch } from 'react-redux';

import { userRegister } from 'redux/auth/operations';

import { Form, Label } from './RegisterForm.styled';
import { Button } from 'components/UserMenu/UserMenu.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(userRegister(userData));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username
        <input type="text" name="name" required/>
      </Label>
      <Label>
        Email
        <input type="email" name="email" required/>
      </Label>
      <Label>
        Password
        <input type="password" name="password" minLength="7" required/>
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};

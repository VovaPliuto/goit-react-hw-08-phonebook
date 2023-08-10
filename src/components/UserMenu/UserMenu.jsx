import React from 'react';
import { useDispatch } from 'react-redux';

import { userLogOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import { NavWrapper } from 'components/Layout/Layout.styled';
import { Button, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(userLogOut());

  const { user } = useAuth();

  return (
    <NavWrapper>
      <Text>Hello, {user.name} !</Text>
      <Button type="button" onClick={handleClick}>
        Logout
      </Button>
    </NavWrapper>
  );
};

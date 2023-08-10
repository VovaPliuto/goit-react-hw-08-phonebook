import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu/UserMenu';
import Loader from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';

import {
  StyledLink,
  Header,
  Nav,
  NavWrapper,
  Container,
} from './Layout.styled';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Nav>
          <NavWrapper>
            <StyledLink to="/">Home</StyledLink>
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
          </NavWrapper>
          {!isLoggedIn ? (
            <NavWrapper>
              <StyledLink to="/register">Register</StyledLink>
              <StyledLink to="/login">Login</StyledLink>
            </NavWrapper>
          ) : (
            <UserMenu />
          )}
        </Nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;

import React from 'react';
import { HeaderSpan, MainText } from './Home.styled';
import { Helmet } from 'react-helmet-async';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <MainText>
        <span>Welcome to your Phonebook App. </span>

        {!isLoggedIn ? (
          <HeaderSpan>
            Please <NavLink to={'/register'}>register</NavLink> or{' '}
            <NavLink to={'/login'}>Log In</NavLink> !
          </HeaderSpan>
        ) : (
          <HeaderSpan>
            You can work with your contacts folowing this{' '}
            <NavLink to={'/contacts'}>link</NavLink> !
          </HeaderSpan>
        )}
      </MainText>
    </>
  );
};

export default Home;

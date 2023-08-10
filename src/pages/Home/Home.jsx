import React from 'react';
import { HeaderSpan, MainHeader } from './Home.styled';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <MainHeader>
        Welcome to your Phonebook App.{' '}
        <HeaderSpan>Please register or Log In !</HeaderSpan>
      </MainHeader>
    </>
  );
};

export default Home;

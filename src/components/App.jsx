import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

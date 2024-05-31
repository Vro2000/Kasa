// src/components/AppLayout/AppLayout.jsx
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AppLayout.scss';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;


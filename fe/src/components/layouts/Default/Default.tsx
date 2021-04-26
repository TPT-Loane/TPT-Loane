import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

export default function Layout({ children } : { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

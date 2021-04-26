import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

export default function Default({ children } : { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Box
        position="relative"
        minHeight="100%"
      >
        <Header />
        <Box pb={14}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

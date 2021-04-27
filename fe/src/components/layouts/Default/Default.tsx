import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';

export default function Default({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Box position="relative" minHeight="100%">
        <Header />
        <Flex position="sticky" flexDirection="row" pb={14}>
          <Sidebar />
          <Flex w="100%">{children}</Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}

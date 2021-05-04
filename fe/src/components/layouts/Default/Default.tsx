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
        <Flex
          // If you find a better fix to make this 100% of page height, let me know. - Georg
          minH="100vh"
          pb={14}
        >
          <Sidebar />
          <Box w="100%">{children}</Box>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}

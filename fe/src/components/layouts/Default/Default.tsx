/* eslint-disable */
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
export default function Default({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  console.log(children);

  return (
    <Grid
      templateColumns={{
        base: 'minmax(300px, auto) 1fr 1fr',
        md: 'minmax(300px, auto) 1fr 1fr',
        lg: 'minmax(300px, auto) 1fr 1fr',
        xl: 'minmax(300px, auto) 1fr 1fr',
      }}
      templateRows="0.1fr 1fr"
      templateAreas={{
        base: '"nav nav nav" "main main main"',
        md: '"nav nav nav" "sidebar main main"',
      }}
      height="100vh"
    >
      <GridItem
        gridArea="nav"
        bg={useColorModeValue('gray.100', 'gray.900')}
        zIndex={3}
      >
        <Header />
      </GridItem>
      <GridItem
        gridArea="sidebar"
        overflowY="auto"
        bg={useColorModeValue('gray.200', 'gray.900')}
        display={{ base: 'none', md: 'block' }}
      >
        <Sidebar />
      </GridItem>
      <GridItem gridArea="main" overflow="auto">
        <Grid
          templateColumns="1fr"
          templateRows="1fr auto"
          templateAreas='"main-content" "main-footer"'
          height="100%"
        >
          <GridItem gridArea="main-content">
            <Box>{children}</Box>
          </GridItem>
          <GridItem
            gridArea="main-footer"
            bg={useColorModeValue('gray.50', '#161721')}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            <Footer />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
/* eslint-disable */

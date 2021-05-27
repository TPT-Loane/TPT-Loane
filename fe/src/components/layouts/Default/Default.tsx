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
      templateColumns="0.5fr 1fr 1fr"
      templateRows="0.1fr 1fr"
      templateAreas='
      "nav nav nav"
      "sidebar main main"
      '
      height="100vh"
    >
      <GridItem
        gridArea="nav"
        bg={useColorModeValue('gray.100', 'gray.900')}
        zIndex={3}
      >
        <Header />
      </GridItem>
      <GridItem gridArea="sidebar" overflowY="auto">
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
          <GridItem gridArea="main-footer">
            <Footer />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
/* eslint-disable */

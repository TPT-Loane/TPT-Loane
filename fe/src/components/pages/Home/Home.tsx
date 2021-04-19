import {
  Box, Code, Image, Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../../assets/logo.svg';
import './Home.css';

function Home(): JSX.Element {
  return (
    <Box className="App">
      <Text className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit
          <Code>src/Home.tsx</Code>
          and save to reload.
        </Text>
        <Text
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Text>
      </Text>
    </Box>
  );
}

export default Home;

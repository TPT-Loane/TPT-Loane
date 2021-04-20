import {
  Box, Code, Image, Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../../assets/logo.svg';
import AppLink from './AppLink';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <Box className={styles.home}>
      <Box className={styles.homeHeader}>
        <Image src={logo} className={styles.homeLogo} alt="logo" />
        <Text>
          Edit
          {' '}
          <code>src/Home.tsx</code>
          {' '}
          and save to reload.
        </Text>
        <AppLink />
      </Box>
    </Box>
  );
}

export default Home;

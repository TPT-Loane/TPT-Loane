import {
  Box, Code, Image, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
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
          <Code>src/Home.tsx</Code>
          {' '}
          and save to reload.
        </Text>
        <Text>
          <Link to="/about">About</Link>
        </Text>
        <AppLink />
      </Box>
    </Box>
  );
}

export default Home;

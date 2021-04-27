import {
  Box, Code, Flex, Image, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Sidebar from '../../components/Sidebar';
import AppLink from './AppLink';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <Flex flexDirection="row" position="sticky">
      <Sidebar />
      <Box boxSizing="border-box" w="100%" justifyContent="center">
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
    </Flex>
  );
}

export default Home;

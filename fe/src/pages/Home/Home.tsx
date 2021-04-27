import { Flex, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import AppLink from './AppLink';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <Flex w="100%" minH="100vh" justifyContent="center" flexDirection="column" alignItems="center">
      <Image src={logo} className={styles.homeLogo} alt="logo" />
      <AppLink />
    </Flex>
  );
}

export default Home;

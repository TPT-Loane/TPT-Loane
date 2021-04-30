// import styles from './Login.module.scss';
import { Input, Button, Flex, Text } from "@chakra-ui/react";

function Login(): JSX.Element {
    return (
        <Flex direction="column" align="center">
            <Text fontSize="30px" mb="30px">Login</Text>
            <Input mb="30px" w="30%" type="text" placeholder="example@tptlive.ee" id="username" />
            <Input mb="30px" w="30%" type="text" placeholder="password" id="password" />
            <Button>Login</Button>
        </Flex>


    );
}
export default Login;
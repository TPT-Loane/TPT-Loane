import styles from './Login.module.scss';
import { Input, Button, Box, Text } from "@chakra-ui/react";

function Login(): JSX.Element {
    return (
        <Box className={styles.login}>
            <Box className={styles.loginItems}>
                <Text fontSize="30px" mb="30px">Login</Text>
                <Input mb="30px" w="30%" type="text" placeholder="example@tptlive.ee" id="username"/>
                <Input mb="20px" w="30%" type="text" placeholder="password" id="password"/>
                <Button>Login</Button>
            </Box>
            
        </Box>
    );
}
export default Login;
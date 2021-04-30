import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Text,
  Box,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <Flex direction="column" align="center">
      <Text fontSize="30px" mb="30px">Login</Text>
      <Box align="center">
        <form>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input mb="30px" w="100%" type="email" placeholder="example@tptlive.ee" id="username" isRequired />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                mb="50px"
                w="100%"
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                id="password"
                isRequired
              />
              <InputRightElement>
                <Button
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? <ViewIcon name="view-off" /> : <ViewIcon name="view" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button type="submit">Sign in</Button>
        </form>
      </Box>
    </Flex>
  );
}

export default Login;

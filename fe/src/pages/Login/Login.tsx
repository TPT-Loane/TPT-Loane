import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Form, Formik } from 'formik';
import InputField from '../../components/Input';

function Login(): JSX.Element {
  const signInLink = useColorModeValue('pink.500', 'cyan.500');
  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
      mt={12}
    >
      <Box w="20rem">
        <Formik
          initialValues={{ usernameOrEmail: '', password: '' }}
          onSubmit={values => {
            // eslint-disable-next-line
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="usernameOrEmail"
                placeholder="Username or email"
                label="Username or Email"
              />
              <InputField
                name="password"
                label="Password"
                placeholder="Enter password"
              />
              <Box mt={2}>
                <HStack>
                  <Text>New to TPT Loane?</Text>
                  <RouterLink to="register">
                    <Text textColor={signInLink} cursor="pointer">
                      Sign up
                    </Text>
                  </RouterLink>
                </HStack>
              </Box>
              <Box textAlign="end" mt={2}>
                <RouterLink to="#">
                  <Text textColor={signInLink} cursor="pointer">
                    Forgot Password?
                  </Text>
                </RouterLink>
              </Box>
              <Box textAlign="center">
                <Button
                  variant="outline"
                  mt={4}
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default Login;

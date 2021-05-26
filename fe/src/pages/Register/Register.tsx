import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import InputField from '../../components/Input';

function Register(): JSX.Element {
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
          initialValues={{
            username: '',
            fullname: '',
            email: '',
            password: '',
            telephone: '',
            personalcode: '',
          }}
          onSubmit={values => {
            // eslint-disable-next-line
            console.log(values);
          }}
        >
          {/* @todo maybe make numeric inputfields for personal code and phone number */}
          {({ isSubmitting }) => (
            <Form>
              <InputField
                name="username"
                label="Username"
                placeholder="Username"
              />
              <InputField
                name="fullname"
                label="Full name"
                placeholder="Full name"
              />
              <InputField name="email" label="Email" placeholder="Email" />
              <InputField
                name="password"
                label="Password"
                placeholder="Password"
              />
              <InputField
                name="telephone"
                label="Telephone"
                placeholder="Telephone number"
              />
              <InputField
                name="personalcode"
                label="Personal Code"
                placeholder="Personal Code"
              />
              <Box mt={2}>
                Already a Loaner?&nbsp;
                <RouterLink to="login">
                  {/* eslint-disable-next-line */}
                  <Link textColor={signInLink}>Sign in</Link>
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
                  Register
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

export default Register;

import {
  Flex, Box, Text, Button,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import InputField from '../../components/Input';
import { InputFieldProps } from '../../utils/index';

function ProductCreate(): JSX.Element {
  const initialValues: InputFieldProps = {
    name: '',
  };
  return (
    <Flex direction="column" align="center">
      <Text fontSize="30px" mb="30px">Product</Text>
      <Box align="center">
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            // eslint-disable-next-line
            console.log({ values });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="name" label="Item name" placeholder="Name" />
              <InputField name="description" label="Description" placeholder="Description" textarea="true" />
              <Button type="submit" isLoading={isSubmitting}>Create</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
export default ProductCreate;

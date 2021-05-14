import {
  Flex,
  Box,
  Input,
  Text,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react';
import {
  Formik,
  Form,
} from 'formik';

interface MyFormValues {
  name: string;
  description: string;
}

function ProductPage(): JSX.Element {
  const initialValues: MyFormValues = { name: '', description: '' };
  return (
    <Flex direction="column" align="center">
      <Text fontSize="30px" mb="30px">Product</Text>
      <Box align="center">
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log({ values });
          }}
        >
          {({
            values, handleChange, handleBlur, handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormLabel>Item name</FormLabel>
              <Input
                mb="30px"
                w="100%"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormLabel>Description</FormLabel>
              <Textarea
                mb="30px"
                w="100%"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
export default ProductPage;

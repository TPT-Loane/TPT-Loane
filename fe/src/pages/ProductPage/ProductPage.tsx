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

interface ProductFormValues {
  name: string;
  description: string;
}

function ProductPage(): JSX.Element {
  const initialValues: ProductFormValues = { name: '', description: '' };
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
          {({
            values, handleChange, handleBlur, handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormLabel>Item name</FormLabel>
              <Input
                mb={3}
                w="100%"
                type="text"
                name="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isRequired
              />
              <FormLabel>Description</FormLabel>
              <Textarea
                mb={3}
                w="100%"
                type="text"
                name="description"
                placeholder="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isRequired
              />
              <Button type="submit">Create</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
export default ProductPage;

import {
  Flex,
  Box,
  Input,
  Text,
  FormLabel,
  Button,
  Textarea,
} from '@chakra-ui/react';
import {
  Formik,
  Form,
  useField,
} from 'formik';

interface ProductFormValues {
  name: string;
  description: string;
}

const InputField = ({ ...props }) => {
  const [field] = useField(props.name);
  return (
    <Input mb={3} w="100%" {...field} placeholder="name" isRequired />);
};

const TextAreaField = ({ ...props }) => {
  const [field] = useField(props.name);
  return (
    <Textarea w="100%" {...field} placeholder="description" isRequired />);
};

function ProductCreate(): JSX.Element {
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
          <Form>
            <FormLabel mb={3}>Item name</FormLabel>
            <InputField name="name" type="text" />
            <FormLabel>Description</FormLabel>
            <TextAreaField name="description" type="text" />
            <Button type="submit">Create</Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
}
export default ProductCreate;

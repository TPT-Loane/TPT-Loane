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

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
  const { label, textarea } = props;
  const [field] = useField(props.name);

  let InputOrTextarea: typeof Input | typeof Textarea = Input;
  if (textarea) {
    InputOrTextarea = Textarea;
  }
  return (
    <>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea mb={3} w="100%" {...field} {...props} id={field.name} isRequired />
    </>
  );
};

function ProductCreate(): JSX.Element {
  const initialValues: InputFieldProps = {
    name: '', label: '', placeholder: '',
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
              <InputField name="description" label="Description" placeholder="Description" textarea />
              <Button type="submit" isLoading={isSubmitting}>Create</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
export default ProductCreate;

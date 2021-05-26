import {
  Input,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import {

  useField,
} from 'formik';

export interface InputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  textarea?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
  const { label, textarea } = props;
  const [field] = useField(props.name);

  let InputOrTextarea: typeof Input | typeof Textarea = Input;
  if (textarea === 'true') {
    InputOrTextarea = Textarea;
  }
  return (
    <>
      <FormLabel htmlFor={field.name}>
        {' '}
        { label }
        {' '}
      </FormLabel>
      <InputOrTextarea mb={3} w="100%" {...field} {...props} id={field.name} isRequired />
    </>
  );
};

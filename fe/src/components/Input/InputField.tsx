import {
  Input,
  FormLabel,
  Textarea,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useField } from 'formik';
import React, { useState } from 'react';
import { InputFieldProps } from '../../utils';

const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
  const { label, textarea, name } = props;
  const [field] = useField(props.name);
  const [show, setShow] = useState(false);

  let InputOrTextarea: typeof Input | typeof Textarea = Input;
  if (textarea === 'true') {
    InputOrTextarea = Textarea;
  }
  return (
    <>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {name === 'password' ? (
        <InputGroup isAttached>
          <Input
            {...field}
            {...props}
            id={field.name}
            variant="outline"
            type={show ? 'text' : 'password'}
          />
          <InputRightElement width="3rem">
            {show ? (
              <IconButton
                onClick={() => setShow(!show)}
                icon={<FontAwesomeIcon icon={['fas', 'eye']} size="lg" />}
                aria-label="show"
                height="1.5rem"
                size="sm"
              />
            ) : (
              <IconButton
                onClick={() => setShow(!show)}
                icon={
                  <FontAwesomeIcon icon={['fas', 'eye-slash']} size="lg" />
                }
                aria-label="hide"
                height="1.5rem"
                size="sm"
              />
            )}
          </InputRightElement>
        </InputGroup>
      ) : (
        <InputOrTextarea
          mb={3}
          w="100%"
          {...field}
          {...props}
          id={field.name}
          isRequired
        />
      )}
    </>
  );
};

export default InputField;

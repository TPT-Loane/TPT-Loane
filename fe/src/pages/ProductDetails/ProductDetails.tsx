import {
  CheckCircleIcon, NotAllowedIcon, CheckIcon, CloseIcon, EditIcon,
} from '@chakra-ui/icons';
import {
  AspectRatio, Flex, Image, Text, Editable, EditablePreview,
  EditableInput, useBoolean, Textarea, IconButton, ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';
// import { useParams } from 'react-router-dom';

// interface RouteParams {
//   id: string;
// }

const ProductDetails: React.FC = () => {
  // @todo - Remove mock data and make a graphql hook to get single item based on product id

  const data = {
    product: {
      id: 7,
      name: 'Nikon 600P',
      description:
        'This is this product description..\n\nStats for HP Pavilion 300H:\nCamera - Good\nQuality - Very bad\n',
      isAvailable: true,
      imageUrl:
        'https://img.theweek.in/content/dam/week/news/sci-tech/2019/June/camera-photographer-photo-technology-shut.jpg',
    },
    quantity: 4,
  };

  // const { id } = useParams<RouteParams>();
  const [isEditable, setIsEditable] = useBoolean();
  const { product, quantity } = data;
  const {
    description, name, isAvailable, imageUrl,
  } = product;

  const [value, setValue] = React.useState(description);

  const handleInputChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  // Kaur tee sama sellega mis textiga
  function EditableControls() {
    return isEditable ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton onClick={setIsEditable.toggle} aria-label="Save" icon={<CheckIcon />} />
        <IconButton onClick={setIsEditable.toggle} aria-label="Cancel" icon={<CloseIcon />} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton onClick={setIsEditable.toggle} aria-label="Edit" size="sm" icon={<EditIcon />} />
      </Flex>
    );
  }

  function DescriptionText() {
    return isEditable ? (
      <Textarea onChange={handleInputChange} value={value} size="xl" isDisabled={!isEditable} />
    ) : (
      <Text whiteSpace="pre-wrap" size="xl">{value}</Text>
    );
  }
  return (
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      boxSizing="border-box"
      marginX="2em"
      flexDirection={{ base: 'column', lg: 'row' }}
      textAlign="center"
    >
      <AspectRatio
        w={{
          base: '24em',
          sm: '29em',
          md: '23em',
          lg: '29em',
          xl: '45em',
        }}
        maxW="45em"
        ratio={4 / 3}
        mb={{ base: '1em', lg: 0 }}
        mr={{ lg: '1em' }}
      >
        <Image src={imageUrl} alt="Product Image Main" objectFit="cover" />
      </AspectRatio>
      <Flex flexDirection="column">
        <Editable isPreviewFocusable={isEditable} defaultValue={name}>
          <EditablePreview />
          <EditableInput />
        </Editable>
        <DescriptionText />
        <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
          <Text mr="0.5em">{quantity}</Text>
          {isAvailable ? (
            <CheckCircleIcon w={8} h={8} color="green.500" />
          ) : (
            <NotAllowedIcon w={8} h={8} color="red.500" />
          )}
        </Flex>
        <EditableControls />
      </Flex>
    </Flex>
  );
};

export default ProductDetails;

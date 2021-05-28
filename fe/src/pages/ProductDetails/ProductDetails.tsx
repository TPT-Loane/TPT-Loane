import {
  CheckCircleIcon, NotAllowedIcon, CheckIcon, CloseIcon, EditIcon,
} from '@chakra-ui/icons';
import {
  AspectRatio, Flex, Image, Text, Textarea, IconButton, ButtonGroup, Input,
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
  const [isEditable, setIsEditable] = React.useState(false);
  const [name, setName] = React.useState(data.product.name);
  const [description, setDescription] = React.useState(data.product.description);
  const { product, quantity } = data;
  const {
    isAvailable, imageUrl,
  } = product;

  const cancelSave = () => {
    setName(data.product.name);
    setDescription(data.product.description);
    setIsEditable(false);
  };
  const submitSave = () => {
    setIsEditable(false);
  };

  function EditableControls() {
    return isEditable ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton onClick={() => submitSave()} aria-label="Save" icon={<CheckIcon />} />
        <IconButton onClick={() => cancelSave()} aria-label="Cancel" icon={<CloseIcon />} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton onClick={() => setIsEditable(true)} aria-label="Edit" size="sm" icon={<EditIcon />} />
      </Flex>
    );
  }

  function DescriptionText() {
    return isEditable ? (
      <Textarea
        onChange={e => setDescription(e.target.value)}
        defaultValue={description}
        size="xl"
        isDisabled={!isEditable}
        height="auto"
        rows={8}
      />
    ) : (
      <Text whiteSpace="pre-wrap" size="xl">{description}</Text>
    );
  }

  function NameText() {
    return isEditable ? (
      <Input
        onChange={e => setName(e.target.value)}
        defaultValue={name}
        size="xl"
        isDisabled={!isEditable}
      />
    ) : (
      <Text whiteSpace="pre-wrap" size="xl">{name}</Text>
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
        <NameText />
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

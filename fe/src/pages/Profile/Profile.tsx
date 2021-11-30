import {
  Flex,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Profile: React.FC = () => {
  const data = {
    user: {
      avatar: 'http://www.gravatar.com/avatar/?d=identicon',
      profileName: 'Peeter',
      fullName: 'Peeter Paan',
      email: 'peeter.paan@gmail.com',
      phoneNumber: '+372 56864534',
    },
  };
  const { user } = data;
  const {
    avatar, profileName, fullName, email, phoneNumber,
  } = user;
  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
      mt={12}
    >
      <Box w="20rem">
        <Wrap
          direction="column"
          align="center"
          justifyContent="center"
          mt={12}
          spacing="20px"
        >
          <WrapItem>
            <Avatar size="2xl" src={avatar} />
          </WrapItem>
          <WrapItem>
            <Heading as="h2" size="3xl">{profileName}</Heading>
          </WrapItem>
          <WrapItem>
            <Text fontSize="2xl">{fullName}</Text>
          </WrapItem>
          <WrapItem>
            <Text fontSize="2xl">{email}</Text>
          </WrapItem>
          <WrapItem>
            <Text fontSize="2xl">{phoneNumber}</Text>
          </WrapItem>
        </Wrap>
      </Box>
    </Flex>

  );
};

export default Profile;

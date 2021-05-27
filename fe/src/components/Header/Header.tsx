import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';
import { HeaderRightSide } from './HeaderRightSide';

export default function Header(): JSX.Element {
  const me = 'Peeter';
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="sticky"
      zIndex={3}
      top={0}
    >
      <Flex h={16} align="center" maxW={1200} m="auto">
        <HeaderLeftSide />
        <HeaderRightSide me={me} />
      </Flex>
    </Box>
  );
}

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';

export default function Header(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="sticky"
      zIndex={3}
      top={0}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HeaderLeftSide />
      </Flex>
    </Box>
  );
}

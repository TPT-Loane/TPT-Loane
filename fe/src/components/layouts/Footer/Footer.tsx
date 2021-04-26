import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function Footer(): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="8xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2021 Tallinn Polytechnic School. All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          <Link href="https://www.tptlive.ee/" isExternal>
            Tallinn Polytechnic School
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

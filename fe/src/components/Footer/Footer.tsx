import {
  Box,
  Container,
  Link,
  Stack,
  TextProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Copyright } from './CopyRight';

export default function Footer(props: TextProps): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      {...props}
    >
      <Container
        as={Stack}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Copyright />
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

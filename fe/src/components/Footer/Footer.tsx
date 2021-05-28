import {
  Box, Flex, Link, Stack, TextProps,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Copyright } from './CopyRight';

export default function Footer(props: TextProps): JSX.Element {
  return (
    <Box {...props} padding={5}>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justify={{ base: 'center', lg: 'space-between' }}
        align={{ base: 'center', lg: 'center' }}
        textAlign="center"
        maxW={1100}
        m="auto"
      >
        <Box>
          <Copyright />
        </Box>
        <Box>
          <Stack direction="row" spacing={6}>
            <Link href="https://www.tptlive.ee/" isExternal>
              Tallinn Polytechnic School
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

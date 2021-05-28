import { Flex } from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';
import { HeaderRightSide } from './HeaderRightSide';

export default function Header(): JSX.Element {
  const me = undefined;
  return (
    <Flex
      height="100%"
      align="center"
      maxW={{
        base: 400, sm: 500, md: 700, lg: 900, xl: 1200,
      }}
      m="auto"
    >
      <HeaderLeftSide />
      <HeaderRightSide me={me} />
    </Flex>
  );
}

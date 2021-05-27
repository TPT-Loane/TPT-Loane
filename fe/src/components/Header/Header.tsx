import { Flex } from '@chakra-ui/react';
import { HeaderLeftSide } from './HeaderLeftSide';
import { HeaderRightSide } from './HeaderRightSide';

export default function Header(): JSX.Element {
  const me = 'Peeter';
  return (
    <Flex height="100%" align="center" maxW={1200} m="auto">
      <HeaderLeftSide />
      <HeaderRightSide me={me} />
    </Flex>
  );
}

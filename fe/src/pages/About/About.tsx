import { Flex, Text } from '@chakra-ui/react';

function About(): JSX.Element {
  // @TODO - Add some actual content here.
  return (
    <Flex w="100%" minH="100vh" justifyContent="center" flexDirection="column" alignItems="center">
      <Text fontSize="xl">About Page</Text>
    </Flex>
  );
}

export default About;

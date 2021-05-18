import { FaMoon, FaSun } from 'react-icons/all';
import { HStack, IconButton, useColorMode } from '@chakra-ui/react';

export default function ColorMode(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing={12} ml="auto" title={colorMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        aria-label="Switch color mode"
        variant="outline"
      />
    </HStack>
  );
}

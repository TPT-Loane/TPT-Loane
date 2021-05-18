<<<<<<< HEAD
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
=======
import { FaMoon, FaSun } from 'react-icons/all';
import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
>>>>>>> 84b2e2e... Add possibility to switch between "dark" and "light" theme,

export default function ColorMode(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
<<<<<<< HEAD
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      title={colorMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={toggleColorMode}
      aria-label="Switch color mode"
      variant="outline"
    />
=======
    <HStack spacing={12} ml="auto" title={colorMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        aria-label="Switch color mode"
        variant="outline"
      />
    </HStack>
>>>>>>> 84b2e2e... Add possibility to switch between "dark" and "light" theme,
  );
}

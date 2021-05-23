import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export default function ColorMode(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      title={colorMode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      onClick={toggleColorMode}
      aria-label="Switch color mode"
      variant="outline"
    />
  );
}
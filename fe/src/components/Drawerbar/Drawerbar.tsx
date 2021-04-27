import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { DrawerbarContent } from './DrawerbarContent';

const Drawerbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        icon={<HamburgerIcon size={25} />}
        aria-label="List"
        variant="ghost"
        size="md"
        onClick={onOpen}
        display={{ base: 'inline-flex', xl: 'none' }}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>TPT Loane</Text>
          </DrawerHeader>
          <DrawerBody className="scrollbar" paddingX={0}>
            <DrawerbarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawerbar;

import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ColorMode from '../ColorMode';

interface Props {
  me: string | undefined;
}

export const HeaderRightSide: React.FC<Props> = ({ me }) => (
  <>
    {me ? (
      // user IS logged in
      <HStack spacing={2} ml="auto">
        <Link to="create">
          <IconButton
            aria-label="Create product"
            icon={<AddIcon />}
            px={2}
            py={1}
            rounded="md"
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}
          />
        </Link>
        <Menu>
          <MenuButton as={Button}>{me}</MenuButton>
          <MenuList>
            <MenuGroup title="View Options">
              <MenuItem as={Box} ml="auto" mr="auto">
                <Text width="60%">Toggle mode</Text>
                <Box width="40%">
                  <ColorMode />
                </Box>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem
                onClick={async () => {
                  // eslint-disable-next-line
                  console.log('logout');
                }}
              >
                Logout
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
    ) : (
      // user is NOT logged in
      <HStack spacing={2} ml="auto">
        <Link to="login">
          <Button p={4} py={1} rounded="md">
            <Text fontSize="lg">Login</Text>
          </Button>
        </Link>
        <Link to="register">
          <Button p={4} py={1} rounded="md">
            <Text fontSize="lg">Register</Text>
          </Button>
        </Link>
        <Menu>
          <MenuButton>
            <Button>
              <FontAwesomeIcon width={32} icon={['fas', 'user']} />
            </Button>
          </MenuButton>
          <MenuList>
            <MenuGroup title="View Options">
              <MenuItem as={Box} ml="auto" mr="auto">
                <Text width="60%">Toggle mode</Text>
                <Box width="40%">
                  <ColorMode />
                </Box>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
    )}
  </>
);

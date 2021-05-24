import { Flex } from '@chakra-ui/react';
import React from 'react';
import SidebarItemLink from './SidebarItemLink';
import { NAV_ITEMS } from '../../utils';

export const DrawerbarContent: React.FC = () => (
  <Flex direction="column">
    {NAV_ITEMS.map(navItem => {
      const { iconName, href, label } = navItem;
      return (
        <SidebarItemLink
          keyContent={href}
          icon={iconName}
          title={label}
          where={href}
        />
      );
    })}
  </Flex>
);

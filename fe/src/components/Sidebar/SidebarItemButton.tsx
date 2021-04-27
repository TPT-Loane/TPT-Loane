import { Button } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface SidebarItemButtonProps {
  icon: ReactElement<string | undefined>;
  title: string;
  active?: boolean;
}

export const SidebarItemButton: React.FC<SidebarItemButtonProps> = ({
  icon,
  active,
  title,
}) => (
  /* <Link to="/about">About</Link> */
  <Button
    borderRadius={0}
    variant="ghost"
    justifyContent="flex-start"
    leftIcon={icon}
    isActive={active}
    iconSpacing="1.5em"
    pl="1.5em"
    fontSize="md"
  >
    {title}
  </Button>
);

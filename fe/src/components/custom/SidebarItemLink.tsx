import { Button, Link } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface SidebarItemLinkProps {
  icon: ReactElement<string | undefined>;
  title: string;
  where:string;
}

export const SidebarItemLink: React.FC<SidebarItemLinkProps> = ({
  icon,
  title,
  where,
}) => (
  <Button
    as={Link}
    borderRadius={0}
    variant="ghost"
    justifyContent="flex-start"
    leftIcon={icon}
    iconSpacing="1.5em"
    pl="1.5em"
    fontSize="md"
    href={where}
  >
    {title}
  </Button>
);

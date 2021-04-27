import { Button } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import {
  Link as RouteLink,
} from 'react-router-dom';

interface SidebarItemLinkProps {
  icon: ReactElement<string | undefined>;
  title: string;
  where:string;
}

const SidebarItemLink: React.FC<SidebarItemLinkProps> = ({
  icon,
  title,
  where,
}) => (
  <Button
    as={RouteLink}
    borderRadius={0}
    variant="ghost"
    justifyContent="flex-start"
    leftIcon={icon}
    iconSpacing="1.5em"
    pl="1.5em"
    fontSize="md"
    to={where}
  >
    {title}
  </Button>
);

export default SidebarItemLink;

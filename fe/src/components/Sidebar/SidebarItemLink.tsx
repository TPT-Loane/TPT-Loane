import { Box, Button, Text } from '@chakra-ui/react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

interface SidebarItemLinkProps {
  icon: IconName;
  title: string;
  where: string;
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
    pl="1.5em"
    fontSize="md"
    to={where}
    minW="100%"
  >
    <Box textAlign="center" minW="2em">
      <FontAwesomeIcon icon={['fas', icon]} size="lg" />
    </Box>
    <Text ml="3">{title}</Text>
  </Button>
);

export default SidebarItemLink;

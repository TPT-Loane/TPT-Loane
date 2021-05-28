import { Text, TextProps } from '@chakra-ui/react';

/* eslint-disable */
export const Copyright = (props: TextProps) => (
  <Text {...props}>
    &copy; {new Date().getFullYear()} Tallinn Polytechnic School. All
    rights reserved.
  </Text>
);

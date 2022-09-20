import { Text, Flex, Stack } from '@chakra-ui/react';

const titleStyle = {
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '34px',
  color: '#0C1D37',
};

const textStyle = {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#0C1D37',
};
export const Header = ({ title, text }) => {
  return (
    <Stack textAlign="left" spacing={'10px'} pl={'4px'} pb="40px">
      <Text {...titleStyle}>{title}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};

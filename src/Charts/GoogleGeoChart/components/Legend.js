import { Stack, Text, Flex } from '@chakra-ui/react';

const textStyles = {
  textAlign: 'left',
  lineHeight: '40px',
  fontWight: 400,
  color: '#0C1D37',
};
export const Legend = ({ data }) => {
  return (
    <Stack>
      {data.map(
        (item, i) =>
          i > 0 && (
            <Flex>
              <Text {...textStyles} w="166px">
                {item[0]}
              </Text>{' '}
              <Text {...textStyles}>{item[1].toLocaleString('en', {useGrouping:true})}</Text>
            </Flex>
          ),
      )}
    </Stack>
  );
};

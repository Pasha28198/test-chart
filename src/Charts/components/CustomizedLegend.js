import styled from 'styled-components';
import { Checkbox, Stack } from '@chakra-ui/react';

export const CustomizedLegend = ({ togleLine }) => {
  return (
    <Stack ml={'50px'} spacing={'19px'} direction="column">
      <Checkbox onChange={() => togleLine('Organic')} colorScheme="red" defaultChecked>
        Organic
      </Checkbox>
      <Checkbox onChange={() => togleLine('Social')} colorScheme="green" defaultChecked>
        Social
      </Checkbox>
      <Checkbox onChange={() => togleLine('Direct')} colorScheme="cyan" defaultChecked>
        Direct
      </Checkbox>
      <Checkbox onChange={() => togleLine('Refferences')} colorScheme="Purple" defaultChecked>
        Refferences
      </Checkbox>
      <Checkbox onChange={() => togleLine('Other')} colorScheme="Orange" defaultChecked>
        Other
      </Checkbox>
    </Stack>
  );
};

import { Checkbox, Stack } from '@chakra-ui/react';

export const CustomizedLegend = ({ togleLine }) => {
  return (
    <Stack minWidth="200px" ml={'25px'} spacing={'20px'} direction="column">
      <Stack ml={'25px'} spacing={'19px'} direction="column">
        <Checkbox
          onChange={() => togleLine('unitedStates')}
          colorScheme="blackAlpha"
          defaultChecked
        >
          United States
        </Checkbox>
        <Checkbox onChange={() => togleLine('china')} colorScheme="green" defaultChecked>
          China
        </Checkbox>
        <Checkbox onChange={() => togleLine('brazil')} colorScheme="cyan" defaultChecked>
          Brazil
        </Checkbox>
        <Checkbox onChange={() => togleLine('japan')} colorScheme="Purple" defaultChecked>
          Japan
        </Checkbox>
        <Checkbox onChange={() => togleLine('unknown')} colorScheme="Orange" defaultChecked>
          Unknown
        </Checkbox>
      </Stack>
    </Stack>
  );
};

import { Checkbox, Stack } from '@chakra-ui/react';
import styled from 'styled-components';

const PlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path
        d="M20 12.7847C20 13.3847 19.6 13.7847 19 13.7847H13V19.7847C13 20.3847 12.6 20.7847 12 20.7847C11.4 20.7847 11 20.3847 11 19.7847V13.7847H5C4.4 13.7847 4 13.3847 4 12.7847C4 12.1847 4.4 11.7847 5 11.7847H11V5.78467C11 5.18467 11.4 4.78467 12 4.78467C12.6 4.78467 13 5.18467 13 5.78467V11.7847H19C19.6 11.7847 20 12.1847 20 12.7847Z"
        fill="#0C1D37"
      />
      <mask id="mask0_747_2821" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="17">
        <path
          d="M20 12.7847C20 13.3847 19.6 13.7847 19 13.7847H13V19.7847C13 20.3847 12.6 20.7847 12 20.7847C11.4 20.7847 11 20.3847 11 19.7847V13.7847H5C4.4 13.7847 4 13.3847 4 12.7847C4 12.1847 4.4 11.7847 5 11.7847H11V5.78467C11 5.18467 11.4 4.78467 12 4.78467C12.6 4.78467 13 5.18467 13 5.78467V11.7847H19C19.6 11.7847 20 12.1847 20 12.7847Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_747_2821)"></g>
    </svg>
  );
};
const Button = styled.button`
  width: 200px;
  height: 38px;
  padding: 7px 24px;
  border: 1px solid #e6ebf3;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
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
      <Button>
        <PlusIcon />
        Marker
      </Button>
    </Stack>
  );
};

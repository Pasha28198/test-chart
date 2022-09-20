import styled from 'styled-components';

export const Container = styled.div`
  width: 248px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
  background-color: #0c1d37;
  color: #ffffff;
  &:before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 8px 10px 8px 0;
    border-color: transparent #0c1d37 transparent transparent;
    bottom: -11px;
    left: 50%;
    transform: translateX(-50%) rotate(-90deg);
  }
`;

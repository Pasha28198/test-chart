import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  height: 610px;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border: 1px solid #d2dae9;
  display: flex;
  justify-content: center;
  svg {
    position: absolute;
    top: -28%;
  }
  path {
    stroke: #e6ebf3;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;

export const Wrapper = styled.div`
  padding: 0 80px;
`;

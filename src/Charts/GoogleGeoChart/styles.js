import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  height: 610px;
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

export const Wrapper = styled.div`
  margin-top: 200px;
  display: flex;
  width: 100%;
  padding: 0 100px;
  gap: 24px;
`;

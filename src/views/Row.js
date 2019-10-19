import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
   margin: 0.5em;
  }
`;

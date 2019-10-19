import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
`;
const Tbody = styled.tbody`
`;

const Tr = styled.tr`
  padding: 1em;
  border: 1px solid #d5d5d5;
  &:hover {
    background-color: #4078c0;
    color: white;
  }
`;

const Td = styled.td`
  padding: 0.5em;
  word-break: break-all;
`;

const Table = ({data, columnKeys}) => {
  return <StyledTable>
    <Tbody>
    {data.map((d, i) => (
      <Tr key={d.id}>
        {columnKeys.map(columnKey => <Td key={d[columnKey]}>{d[columnKey]}</Td>)}
      </Tr>
    ))}
    </Tbody>
  </StyledTable>
};

export default Table;

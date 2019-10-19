import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Empty from "./Empty";
import Spin from "./Spin";

const StyledTable = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
`;
const Tr = styled.tr`
  padding: 1em;
  border: 1px solid #d5d5d5;
  cursor: pointer;
  &:hover {
    background-color: #4078c0;
    color: white;
  }
`;
const Th = styled.tr`
  padding: 1em;
  border: 1px solid #d5d5d5;
  background-color: #f5f5f5;
`;
const Td = styled.td`
  padding: 0.5em;
`;

const Table = ({data, loading, columnConfigs, onRowClick}) => {
  if(loading) {
    return <Spin/>
  }
  if(data.length === 0) {
    return <Empty/>
  }
  return (
    <StyledTable>
      <tbody>
        <Th>
          {columnConfigs.map(columnConfig => <Td key={columnConfig.title}>{columnConfig.title}</Td>)}
        </Th>
        {data.map((d) => (
          <Tr key={d.id} onClick={() => onRowClick(d)}>
            {columnConfigs.map(columnConfig => <Td style={columnConfig.style} key={d[columnConfig.key]}>{d[columnConfig.key]}</Td>)}
          </Tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

Table.defaultProps = {
  onRowClick: () => {},
};

Table.propTypes = {
  data: PropTypes.array,
  columnKeys: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default Table;

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: f5f5f5;
  outline: none;
  &:hover {
    background-color: #4078c0;
  }
`;
const Pagination = () => {
  return <>
    <StyledButton/>
    <StyledButton/>
    <StyledButton/>
  </>
};

export default Pagination;

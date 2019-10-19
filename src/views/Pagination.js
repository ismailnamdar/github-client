import React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  height: 30px;
  border-radius: 4px;
  background-color: f5f5f5;
  outline: none;
  font-size: 18px;
  &:hover {
    background-color: #4078c0;
    color: white;
  }
`;

const Pagination = ({ style, hasNextPage, hasPreviousPage, onPrevClick, onNextClick }) => {
  const { t } = useTranslation("translations");
  return <div style={style}>
    <StyledButton disabled={!hasPreviousPage} onClick={onPrevClick}>
      {"<"}
    </StyledButton>
    <StyledButton disabled={!hasNextPage} onClick={onNextClick}>
      {">"}
    </StyledButton>
  </div>
};

Pagination.defaultProps = {
  style: {},
  hasNextPage: true,
  hasPreviousPage: true,
  onPrevClick: () => {},
  onNextClick: () => {}
};

Pagination.propTypes = {
  style: PropTypes.object,
  hasNextPage: PropTypes.bool,
  hasPreviousPage: PropTypes.bool,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func
};

export default Pagination;

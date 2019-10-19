import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 28px;
  border-radius: 24px;
  border-style: none;
  background-color: #e8e8e8;
  padding: 0.4em;
  minWidth: 200px;
  width: ${props => props.width};
  font-size: 24px;
  outline: none;
`;

const Input = ({ initialValue, width, placeholder, onChange }) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback((event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  }, [onChange, setValue]);
  return (
    <StyledInput
      value={value}
      width={width}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  value: null,
  width: "200px",
  onChange: () => {}
};

export default Input;

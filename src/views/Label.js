import styled from "styled-components";

const Label = styled.span`
  font-size: 24px;
  color: #333;
  font-weight: ${props => props.bold ? 'bold' : props.fontWeight};
`;

export default Label;

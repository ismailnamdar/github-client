import styled from "styled-components";

const Avatar = styled.img`
  height: 192px;
  width: 192px;
  border-radius: 96px;
  background-color: white;
  box-shadow: 0px 0px 5px 5px lightgrey;
  src: ${props => props.src};
`;

export default Avatar;

import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  animation: spinner-anim infinite 20s linear;
  height: 100vh;
  pointer-events: none;
  @keyframes spinner-anim {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
/**
 * react logo spinner as loading indicator
 * @returns {*}
 * @constructor
 */
const Spin = () => <StyledImg src={""} className="spinner" alt="logo" />;

export default Spin;

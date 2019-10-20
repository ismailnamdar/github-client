import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  animation: ${props => props.spinning ? "spinner-anim infinite 4s linear" : ""};
  height: 10vh;
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
const Spin = ({ spinning = false, children = <></> }) => {
  return spinning ? <div className={"loader"}/> : children;
};

export default Spin;

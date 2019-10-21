import React from "react";

/**
 * react logo spinner as loading indicator
 * @returns {*}
 * @constructor
 */
const Spin = ({ spinning = false, children }) => {
  return spinning ? <div className={"loader"}/> : children;
};

export default Spin;

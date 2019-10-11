import React from "react";

const Center = ({children}) => <div style={{
  width: window.innerWidth,
  height: window.innerHeight,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#070707"
}}>
  {children}
</div>;

export default Center;

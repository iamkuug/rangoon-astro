import React from "react";

function Separator({
  color = "gray",
  thickness = "1px",
  width = "100%",
  margin = "1rem 0",
  vertical = false,
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: vertical ? thickness : width,
        height: vertical ? width : thickness,
        margin: margin,
      }}
    />
  );
}

export default Separator;

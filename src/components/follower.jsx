import React from "react";
import { useMousePosition } from "./useMousePosition";

const Follower = () => {
  const position = useMousePosition();
  return <div id="follower" style={{ top: position.top }}></div>;
};

export default Follower;

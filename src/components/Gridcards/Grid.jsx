import React from "react";
import { Wrapper, Content } from "./Gridstylesd";

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1> {header} </h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;

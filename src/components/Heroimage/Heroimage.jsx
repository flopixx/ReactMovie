import React from "react";
// styled
import { Wrapper, Content, Text } from "./Heroimagestyled";

const Heroimage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Heroimage;

import React from "react";
import { Wrapper, Content } from "./Detailsstyled";

import { Link } from "react-router-dom";

const Details = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/home">
          <span>Home</span>

          <span>|</span>
          <span>{movieTitle}</span>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Details;

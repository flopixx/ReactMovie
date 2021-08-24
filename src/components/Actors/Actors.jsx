import React from "react";
import { Ima, Wrapper } from "../Actors/Actorsstyled";

const Actors = ({ name, character, imageurl }) => {
  return (
    <Wrapper>
      <Ima src={imageurl} />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

export default Actors;

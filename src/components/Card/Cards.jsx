import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Cardstyled";

const Cards = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} />
        </Link>
      ) : (
        <Image src={image} />
      )}
    </div>
  );
};

export default Cards;

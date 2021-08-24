import React from "react";
import Cards from "../Card/Cards";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { Wrapper, Content, Text } from "../Moviedetail/Moviedetailstyled";
import Noimage from "../../images/no_image.jpg";

const Moviedetail = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Cards
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : Noimage
          }
          clickable={false}
        />

        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-director">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Moviedetail;

import React from "react";
import { useParams } from "react-router";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import Grid from "./Gridcards/Grid";

import { useMovieFetch } from "../hooks/useMovieFecth";
import { Spinner } from "./Spinner/Spinnerstyled";
import Details from "../Details/Details";
import Moviedetail from "./Moviedetail/Moviedetail";
import MovieinfoButon from "./MovieinfoButon/MovieinfoButon";
import Actors from "./Actors/Actors";
import Noimage from "../images/no_image.jpg";
const Movie = () => {
  const { movieId } = useParams();
  const { state, error, loading } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <Details movieTitle={state.original_title} />
      <Moviedetail movie={state} />
      <MovieinfoButon
        time={state.runtime}
        budget={state.budget}
        revenue={state.revenue}
      />

      <Grid header="Actors">
        {state.actors.map((actor) => (
          <Actors
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageurl={
              actor.profile_path
                ? ` ${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : Noimage
            }
          />
        ))}
      </Grid>
    </>
  );
};
// pagina principal donde tengo los componentes cabezera ,cuadro imageninfo, barra botones
export default Movie;

import React from "react";

import Noimage from "../images/no_image.jpg";
// custom hook
import { useHomeFetch } from "../hooks/useHomeFetch";
import Heroimage from "./Heroimage/Heroimage"; // importo el comp en el home y le paso los datos de la api

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
import Grid from "./Gridcards/Grid";
import Cards from "./Card/Cards";
import Spinner from "./Spinner/Spinner";
import Search from "./Search/Search";
import Button from "./Button/Button";

const Home = () => {
  const { movie, loading, error, setSearchtem, searchTerm, setLoadingMore } =
    useHomeFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && movie.results[0] ? ( // cuando buscamos no se muestra la imagen principal
        <Heroimage
          image={` ${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.results[0].backdrop_path}`}
          title={movie.results[0].original_title}
          text={movie.results[0].overview}
        />
      ) : null}
      <Search setSearchtem={setSearchtem} />
      <Grid header={searchTerm ? "Search Results " : "Popular Movies"}>
        {movie.results.map((peli) => (
          <Cards
            clickable
            key={peli.id}
            image={
              peli.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + peli.poster_path
                : Noimage
            }
            movieId={peli.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {movie.page < movie.total_pages && !loading && (
        <Button text="See more" callback={() => setLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;

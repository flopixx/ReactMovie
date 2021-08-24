import React, { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setstate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fectchdate = async () => {
      try {
        setLoading(true);
        seterror(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // filtrar los directores
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setstate({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        seterror(true);
      }
    };
    fectchdate();
  }, [movieId]);

  return { state, loading, error };
};

import React, { useState, useEffect, useRef } from "react";

import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  // estados
  const [searchTerm, setSearchtem] = useState("");
  const [movie, setmovie] = useState(initialState);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [LoadingMore, setLoadingMore] = useState(false);
  // serchterm es el termino de busqueda

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      seterror(false);
      setloading(true); // esta cargando la api para spinner

      const movies = await API.fetchMovies(page, searchTerm);

      setmovie((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));

      console.log(movie);
    } catch (error) {
      seterror(true);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    setmovie(initialState);
    fetchMovies(searchTerm);
  }, [searchTerm]);

  // cargar mas

  useEffect(() => {
    if (!LoadingMore) return;

    fetchMovies(Number(movie.page + 1), searchTerm);

    setLoadingMore(false);
  }, [LoadingMore, searchTerm, movie.page]);

  return { movie, loading, error, setSearchtem, searchTerm, setLoadingMore };
};

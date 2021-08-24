import React from "react";

import Home from "./components/Home";
import Header from "./components/Header/Header";

import { GlobalStyle } from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Notfound from "./components/Notfound";
import UseProvider from "./Context";

import Login from "./components/Login";

const App = () => (
  <Router>
    <UseProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <GlobalStyle />
    </UseProvider>
  </Router>
);

export default App;

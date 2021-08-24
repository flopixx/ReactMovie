import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./Searchstyled";
import icon from "../../images/search-icon.svg";

const Search = ({ setSearchtem }) => {
  const [inputstate, setinput] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    // retraso para cuando busque algo

    if (initial.current) {
      initial.current = false;
      return;
    }
    const time = setTimeout(() => {
      setSearchtem(inputstate);
    }, 500); // despues de milisegundos
    return () => {
      clearTimeout(time);
    };
  }, [setSearchtem, inputstate]);

  return (
    <Wrapper>
      <Content>
        <img src={icon} />
        <input
          type="text"
          placeholder="Search movie"
          onChange={(event) => setinput(event.currentTarget.value)}
          value={inputstate}
        />
      </Content>
    </Wrapper>
  );
};

export default Search;

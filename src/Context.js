import React, { useState, createContext } from "react";
export const Context = createContext();

//

const UseProvider = ({ children }) => {
  const [statee, setstatee] = useState(undefined);
  return (
    <Context.Provider value={[statee, setstatee]}>{children}</Context.Provider>
  );
};
export default UseProvider;

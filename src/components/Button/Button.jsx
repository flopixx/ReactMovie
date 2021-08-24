import React from "react";
import { Buttonn } from "./Buttonstyled";

const Button = ({ text, callback }) => {
  return (
    <Buttonn type="button" onClick={callback}>
      {text}
    </Buttonn>
  );
};

export default Button;

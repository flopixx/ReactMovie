import React, { useState, useContext } from "react";
import { Wrapper } from "./Loginstyled";
import { Context } from "../Context";
import { useNavigate } from "react-router";
import API from "../API";
import Button from "./Button/Button";
import Animation from "./Lottie/Animation";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();
  const Handleinput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setuserName(value);
    if (name === "password") setPassword(value); // es lo mismo que hacer e.target.value
  };
  const Handlesubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        userName,
        password
      );

      setUser({ sessionId: sessionId.session_id, userName });
      navigate("/home");
      console.log(sessionId);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      {error && <div className="error">There was a error!</div>}
      <div className="form">
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          name="username"
          onChange={Handleinput}
          placeholder="flopixxx"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={Handleinput}
          placeholder="1234"
        />

        <Button text="Login" callback={Handlesubmit} />
      </div>

      <Animation />
    </Wrapper>
  );
};

export default Login;

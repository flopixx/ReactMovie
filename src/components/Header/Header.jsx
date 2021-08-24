import React, { useContext } from "react";
import rmdlogo from "../../images/react-movie-logo.svg";
import tmdlogo from "../../images/tmdb_logo.svg";
import { Wrapeer, Content, Logo, Tmlogoimg } from "./Headstyled";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

const Header = () => {
  const [user] = useContext(Context);

  return (
    <header>
      <Wrapeer>
        <Content>
          <Link to="/home">
            <Logo src={rmdlogo} />
          </Link>

          <Tmlogoimg src={tmdlogo} />
        </Content>
      </Wrapeer>
    </header>
  );
};

export default Header;

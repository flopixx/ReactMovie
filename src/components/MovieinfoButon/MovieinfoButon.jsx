import React from "react";
import { calcTime, convertMoney } from "../../Helpers";
import { Wrapper, Content } from "../MovieinfoButon/MovieinfoButonstyled";

const MovieinfoButon = ({ time, budget, revenue }) => {
  return (
    <>
      <Wrapper>
        <Content>
          <div className="column">
            <p>Running time:{calcTime(time)}</p>
          </div>
          <div className="column">
            <p>Budget:{convertMoney(budget)}</p>
          </div>
          <div className="column">
            <p>Revenue:{convertMoney(revenue)}</p>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default MovieinfoButon;

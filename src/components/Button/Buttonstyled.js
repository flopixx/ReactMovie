import styled from "styled-components";

export const Buttonn = styled.button`
  display: block;
  background-color: var(--darkgrey);
  padding: 0.3rem 4rem;
  // width: 20%;
  //min-width: 100px;
  //height: 60px;
  border-radius: 1.4rem;
  border: none;
  font-size: var(--fontbig);
  // margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    font-size: var(--fontmed);
  }
`;

import styled from "styled-components";

export const Wrapeer = styled.div`
  background-color: var(--darkgrey);
  padding: 0 1.25rem;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 1.25rem 0;
`;
export const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
export const Tmlogoimg = styled.img`
  width: 100px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

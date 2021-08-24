import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: var(--medgrey);
  color: #fff;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxwidth);
  padding: 0 1.25rem;

  a {
    text-decoration: none;
  }
  span {
    font-size: var(--fontmed);
    color: #fafafa;
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontsmall);
    }
  }
`;

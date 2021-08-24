import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image}), var(--darkgrey);
  position: relative;
  height: 37.5rem;
  max-width: 100%;
  background-size: 100%;
  background-size: cover;

  animation: animate 2s;
  @media screen and (max-width: 768px) {
    background-position: top center;
    background-size: 200%;

    background-repeat: no-repeat;
  }

  @keyframes animate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  //movil  background-position: center;
`;
export const Content = styled.div`
  padding: 1.25rem;
  max-width: var(--maxwidth);
  margin: 0 auto;
`;
export const Text = styled.div`
  position: absolute;
  z-index: 100;
  max-width: 700px;

  bottom: 40px;
  min-height: 100px;
  color: var(--white);

  @media screen and (max-width: 768px) {
    max-width: 300px;

    bottom: 0;
  }

  h1 {
    font-weight: bold;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin: 10px 0 0 0;
    }
  }
  p {
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

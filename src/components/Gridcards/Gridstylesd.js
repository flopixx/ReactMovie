import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 1.25rem 1.25rem;

  h1 {
    color: var(--medgrey);
    margin-bottom: 1.8rem;

    @media screen and (max-width: 768px) {
      font-size: var(--fontbig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

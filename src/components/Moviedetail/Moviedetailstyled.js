import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}) ` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 2.5rem 1.25rem;
`;
export const Content = styled.div`
  display: flex;
  max-width: var(--maxwidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding: 2.5rem 1.25rem;
  color: #fff;
  overflow: hidden;

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }
  p {
    font-size: var(--fontbig);

    @media screen and (max-width: 768px) {
      font-size: var(--fontsmall);
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #f5f4f4;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
      padding: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontbig);
    }
  }
`;

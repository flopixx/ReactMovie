import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 780px;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.3s;
  animation: animateimg 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateimg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

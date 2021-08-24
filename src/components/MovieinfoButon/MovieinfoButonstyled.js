import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkgrey);
  padding: 0 1.25rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(-maxwidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--medgrey);
    border-radius: 20px;
    margin: 0 1.25rem;
    flex: 1;

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }

    p {
      color: #fff;
      font-weight: bold;
      margin-top: 10px;
      // font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 1.25rem 0;
    }
  }
`;

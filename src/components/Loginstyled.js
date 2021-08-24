import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  // flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  input {
    display: block;
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkgrey);
    margin: 10px 0;
    padding: 10px;
    border-radius: 20px;
    outline: none;
  }
  label {
    margin: 0;
    color: #0a043c;
    font-weight: bold;
    font-size: var(--fontmed);
  }

  .error {
    color: red;
  }

  .form {
    @media screen and (max-width: 768px) {
      padding: 30px 0;
    }
  }
`;

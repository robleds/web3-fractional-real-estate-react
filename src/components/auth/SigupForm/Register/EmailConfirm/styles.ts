import styled from "styled-components";

const StyledEmailConfirm = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: white;

  padding: 0 15px;

  h1, h2 {
    font-size: 24px;
    color: #242424;

    margin: 0 0 20px;
  }

  p {
    font-size: 14px;
    color: #727272;

    margin: 0 0 30px;
  }

  button {
    font-size: 14px;
    color: #242424;

    border: none;
    border-bottom: 2px solid #242424;
    padding: 0;
    margin: 0;

    background: transparent;
  }

  @media (min-width: 1024px) {
    .navbar {
      display: none;
    }
  }
`;

export { StyledEmailConfirm };

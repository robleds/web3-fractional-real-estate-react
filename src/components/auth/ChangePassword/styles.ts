import styled from "styled-components";

const StyledChangePassword = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: white;

  padding: 60px 15px 0;

  h1, h2 {
    font-size: 24px;
    color: #242424;

    margin: 20px 0;
  }

  p {
    font-size: 14px;
    color: #727272;

    margin: 0 0 30px;
  }

  form {
    width: 220px;

    input {
      padding: 0 10px;
    }

    button {
      margin: 25px 0;
    }
  }

  .center {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
  }

  @media (min-width: 1024px) {

    padding: 15px 0;

    .navbar {
      display: none;
    }
  }s
`;

export { StyledChangePassword };

import styled from "styled-components";

const StyledLoginForm = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  padding: 105px 15px 0;

  form {
    align-items: center;

    width: 280px;

    h1 {
      margin: 0 0 65px;
    }

    fieldset {
      input {
        margin: 0 0 15px;
        padding: 0 10px;
      }
    }

    .forgot-password {
      color: #727272;
      font-size: 11px;

      text-decoration: underline;

      background: transparent;
      border: none;

      margin: 10px 0 60px;
    }

    p {
      min-width: 320px;
    }
  }

  @media (min-width: 1024px) {
    .navbar {
      display: none;
    }
  }
`;

export { StyledLoginForm };

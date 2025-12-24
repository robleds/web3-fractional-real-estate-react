import styled from "styled-components";

const StyledDocumentsSignupForm = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  align-items: center;

  background-color: white;

  padding: 65px 15px 35px;

  form {
    width: 100%;

    max-width: 580px;
    justify-content: space-between;

    h1 {
      color: #2B70A8;
      font-size: 18px;

      margin: 0 0 20px;
      text-align: center;
    }

    input[type="file"] {
      display: none;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      margin: 30px 0 0;

      .dolater {
        border: none;
        background-color: transparent;

        color: #242424;
        text-decoration: underline;

        padding: 0;
        margin: 0 35px 0;
      }

      .submit {
        width: 180px;
        margin: 0;
      }
    }
  }
`;

export { StyledDocumentsSignupForm };

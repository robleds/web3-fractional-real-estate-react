import styled from "styled-components";

const StyledComplementarySignupForm = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: white;

  padding: 65px 15px 0;

  form {
    width: 100%;
    max-width: 580px;

    h1 {
      color: #2B70A8;
      font-size: 18px;

      margin: 0 0 20px;
      text-align: center;
    }

    fieldset {
      display: flex;
      flex-flow: column nowrap;

      margin: 0 0 30px;

      .input {
        width: 100%;

        input, select {
          padding: 0 10px;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }


  @media (min-width: 614px) {
    form {
      fieldset {
        flex-flow: row nowrap;

        .cep-input, .state-input {
          width: 47%;
        }
      }
    }
  }
`;

export { StyledComplementarySignupForm };

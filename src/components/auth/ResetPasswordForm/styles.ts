import styled from "styled-components";

const StyledResetPasswordForm = styled.div`
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
      margin: 0 0 20px;

      input {
        margin: 0 0 15px;
        padding: 0 10px;
      }
    }

    p {
      min-width: 320px;
    }
  }
`;

export { StyledResetPasswordForm };

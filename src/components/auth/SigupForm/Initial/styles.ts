import styled from "styled-components";

const StyledInitialSignupForm = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  padding: 65px 15px 0;

  form {
    width: 100%;
    max-width: 90vw;

    h1 {
      margin: 30px 0 45px;
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

      .password-input {
        p {
          width: 250px;
          max-width: 250px;

          font-family: 'Open Sans', sans-serif;
          font-size: 8px;
          line-height: 11px;

          margin: 10px 0 0;
        }
      }

      .phone-input {
        position: relative;

        .separator {
          width: 1px;
          height: 25px;

          background-color: #c4c4c4;

          position: absolute;
          bottom: 5px;
          left: 58px;
        }

        .send-sms {
          position: absolute;
          right: 0;
          top: calc(50% - 5px);

          width: 50px;
          height: 35px;

          border: none;

          background-color: #64B514;
          color: white;
          font-size: 12px;

          border-radius: 0 4px 4px 0;
        }
      }

      .PhoneInput {
        display: flex;
        width: 100%;
        position: relative;
        box-shadow: 0 0 2px rgba(0, 0, 0, .25);

        img, svg {
          width: 18px;
          position: absolute;

          top: 11.5px;
          left: 9px;
        }

        select, input {
          box-shadow: none;
        }

        select {
          width: 50px;

          border-radius: 3px 0 0 3px;
          border-right: none;
        }

        input {
          width: 100%;

          padding-left: 18px;
          padding-right: 60px;

          border-radius: 0 3px 3px 0;
          border-left: none;
        }
      }
    }

    .checkboxes {
      display: flex;
      flex-flow: column nowrap;

      .checkbox-input {
        display: flex;
        aling-items: center;

        font-size: 11px;
        color: #727272;

        input {
          width: 12px;
          height: 12px;

          margin: 0 10px 0 0;
          border-radius: 1px;
          border: 1px solid #C4C4C4;
          box-shadow: 0 0 2px rgba(0, 0, 0, .25);
        }

        label {
          line-height: 12px;
        }

        &:not(:last-child) {
          margin: 0 0 15px;
        }
      }
    }

    a, p {
      align-self: center;
    }
  }

  @media (min-width: 614px) {
    form {
      max-width: 580px;

      fieldset {
        flex-flow: row nowrap;

        .name-input {
          width: 145px;

          input {
            width: 145px;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .navbar {
      display: none;
    }
  }
`;

export { StyledInitialSignupForm };

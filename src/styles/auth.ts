import styled from "styled-components";

type AuthPageProps = {
  withPadding?: boolean;
};

const StyledAuthPage = styled.main<AuthPageProps>`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding-top: ${props => props.withPadding ? "60" : "0"}px;

  > div:first-child {
    max-height: 70vh;
  }

  > div:last-child {
    min-height: 50vh;
  }

  .sidebarIconToggle {
    display: none;
  }

  form {
    display: flex;
    flex-flow: column nowrap;

    h1 {
      color: #242424;
      font-size: 24px;
    }

    fieldset {
      width: 100%;

      label {
        display: inline-block;

        color: #727272;
        font-size: 11px;

        margin: 0 0 10px;
      }

      input, select {
        width: 100%;
        height: 35px;

        border-radius: 3px;
        border: 1px solid #C4C4C4;
        box-shadow: 0 0 2px rgba(0, 0, 0, .25);

        color: #727272;
        font-size: 11px;

        &:focus {
          outline: none;
        }
      }

      .password-input {
        position: relative;

        input {
          padding-right: 35px;
        }

        svg {
          position: absolute;
          top: 10.5px;
          right: 10.5px;

          cursor: pointer;
        }
      }
    }

    .submit {
      font-size: 18px;
      margin: 0 0 30px;
    }

    a {
      font-size: 16px;
      color: #242424;

      margin: 0 0 55px;
    }

    p {
      color: #727272;
      font-size: 12px;

      margin-bottom: 30px;
    }
  }

  @media (min-width: 1024px) {
    flex-flow: row nowrap;
    height: 100vh;

    > div:first-child {
      height: 100vh;
      max-height: 100vh;
    }

    > div:last-child {
      height: 100vh;
    }
  }
`;

export { StyledAuthPage };

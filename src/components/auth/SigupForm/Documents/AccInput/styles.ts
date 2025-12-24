import styled from "styled-components";

const StyledAccInput = styled.details`
  width: 100%;
  height: 50px;

  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px #00000040;

  cursor: pointer;
  outline: none;

  margin: 0 0 15px;

  transition: height 0.2s;

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;
    width: 100%;

    padding: 0 15px;

    > div {
      display: flex;
      align-items: center;
    }

    h3 {
      color: #242424;
      font-size: 14px;

      margin: 0 35px 0 0;
    }

    label {
      text-decoration: underline;
      font-size: 11px;

      margin: 0 20px 0 0;
    }

    .indicator {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 15px;
      height: 15px;

      border: 1px solid #C4C4C4;
      border-radius: 50%;

      background-color: #F2F2F2;

      margin: 0 20px 0 0;

      &.active {
        border: none;
      }
    }

    .arrow {
      transition: transform 0.2s;

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    padding: 0 15px;

    p {
      display: flex;
      flex-flow: column nowrap;

      line-height: 16px;
      color: #2B70A8;
      font-size: 12px;

      margin: 0 0 35px;
    }

    .inputs {
      display: flex;
      flex-flow: column nowrap;

      cursor: initial;

      fieldset {
        display: flex;

        .input {
          display: flex;
          width: 100%;
          flex-flow: column nowrap;
          align-items: start;

          margin: 0 30px 25px 0;
        }

        .type-input {
          width: 50%;
        }
      }
    }

    .bank-info {
      .input {
        position: relative;
        svg {
          position: absolute;
          bottom: 19px;
          right: 15px;
        }
      }

      select {
        height: 48px;
        padding: 0 15px;
        position: relative;
        z-index: 10;
        background-color: transparent;

        appearance: none;

        box-shadow: 0px 3px 14px 0px #0000001F;
        border: none;

        color: #000000DE;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
      }

      label {
        font-size: 12px;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        color: #474747;
      }
    }

    .acc-info {
      .input {
        max-width: 150px;

        input {
          padding: 0 10px;
        }
      }
    }

    div {
      display: flex;
      align-items: center;

      height: 100%;

      span {
        color: #242424;
        font-size: 11px;

        margin: 0 20px 0 0;
      }
    }
  }

  &[open] {
    height: 310px;
  }
`;

export { StyledAccInput };

import styled from "styled-components";

const StyledDocInput = styled.details`
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

    .question {
      margin: 0 20px 0 0;
      min-width: 20px;
    }

    .indicator {
      min-width: 15px;
    }

    .arrow {
      min-width: 15px;
    }

    label {
      text-decoration: underline;
      font-size: 11px;

      margin: 0 20px 0 0;
    }

    .disabledLabel {
      pointer-events: none;
      opacity: .5;
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
    justify-content: space-between;

    padding: 0 15px;

    p {
      display: flex;
      flex-flow: column nowrap;

      line-height: 16px;
      color: #2B70A8;
      font-size: 12px;
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
    height: 130px;
  }
`;

export { StyledDocInput };

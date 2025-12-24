import styled from "styled-components";

const StyledProperty = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  width: 100%;
  height: 160px;

  padding: 20px 12px 25px;
  margin: 0 0 25px;

  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px #00000040;

  &.last {
    margin-bottom: 0;
  }

  .start-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 0 25px;

    h5 {
      color: #242424;
      font-size: 14px;
    }

    .fractions {
      color: #727272;
      font-size: 10px;
    }

    .value {
      color: #2B70A8;
      font-size: 14px;
    }
  }

  .prop-status {

    .analysing, .done {
      display: flex;
      align-items: center;

      font-size: 10px;

      margin: 0 0 12px;

      svg {
        margin: 0 15px 0 0;
      }
    }

    .done {
      color: #39680B;
    }

    .analysing {
      color: #F9A826;
    }

    p {
      color: #727272;
      font-size: 11px;
      line-height: 15px;
    }
  }

  @media (min-width: 1024px) {
    width: 380px;
  }
`;

export { StyledProperty };

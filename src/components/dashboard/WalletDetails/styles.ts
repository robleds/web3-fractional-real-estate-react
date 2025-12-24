import styled from "styled-components";

const StyledWalletDetails = styled.div`
  width: 100%;

  .title {
    color: #242424;
    font-size: 18px;

    margin: 50px 0;
  }

  .top, .bottom {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    width: 100%;
  }

  .bottom {
    margin: 35px 0 40px;
  }

  @media (min-width: 1024px) {
    .top, .bottom {
      flex-flow: row nowrap;
    }

    .top {
      align-items: start;
      height: 100px;
    }

    .bottom {
      align-items: end;
    }
  }
`;

export { StyledWalletDetails };

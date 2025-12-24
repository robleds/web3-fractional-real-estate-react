import styled from "styled-components";

const StyledPresentation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  height: 100%;

  background-color: #F2F2F2;

  .text {
    display: flex;
    flex-flow: column nowrap;

    width: 100%;
    max-width: 680px;

    h2 {
      color: #242424;
      font-size: 28px;
      line-height: 37px;

      margin: 0 0 30px;
    }

    p {
      color: #727272;
      font-size: 16px;
      line-height: 21px;
    }
  }

  .image {
    position: static;
    bottom: 80px;

    width: 60%;
    max-width: 680px;

    align-self: flex-end;

    margin: 20px 0 0;
  }

  @media (min-width: 1024px) {
    .image {
      position: relative;
    }

    p {
      max-width: 480px;
    }
  }
`;

export { StyledPresentation };

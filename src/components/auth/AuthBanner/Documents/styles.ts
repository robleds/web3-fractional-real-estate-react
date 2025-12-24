import styled from "styled-components";

const StyledDocumentsAuthBanner = styled.div`
  display: none;
  flex: 9;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  padding: 80px 40px 60px 15px;

  .image {
    width: 100%;
    height: 200px;
    min-height: 200px;

    background-image: url(/static/images/auth3-bg.png);
    background-position: center;
    background-size: cover;

    border-radius: 4px 4px 0 0;
  }

  .text {
    height: 520px;
    width: 100%;

    border-radius: 0 0 4px 4px;

    padding: 40px 0 0;

    background-color: #F2F2F2;

    .title {
      display: flex;
      flex-flow: column nowrap;

      color: #2B70A8;
      font-size: 16px;
      line-height: 21px;

      margin: 0 0 20px;
    }

    p {
      color: #727272;
      font-size: 14px;
      line-height: 18.5px;

      max-width: 390px;

      margin: 0 auto;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    padding: 80px 40px 60px 50px;
  }

  @media (min-width: 1200px) {
    padding: 80px 40px 60px 130px;
  }
`;

export { StyledDocumentsAuthBanner };

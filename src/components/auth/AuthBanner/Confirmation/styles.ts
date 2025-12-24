import styled from "styled-components";

const StyledConfirmationSignupBanner = styled.div`
  display: none;
  flex: 9;
  flex-flow: column nowrap;
  align-items: center;

  padding: 80px 40px 60px 15px;

  .image {
    width: 100%;
    height: 200px;
    min-height: 200px;

    position: relative;

    background-image: url(/static/images/auth4-bg.png);
    background-position: center;
    background-size: cover;

    border-radius: 4px 4px 0 0;

    .enotariado {
      position: absolute;
      top: 30px;
      right: 30px;

      width: 132px;
      height: 45px;
    }
  }

  .text {
    height: 520px;
    width: 100%;

    border-radius: 0 0 4px 4px;

    padding: 32px 55px 40px;

    background-color: #F2F2F2;

    .title {
      display: flex;
      flex-flow: column nowrap;

      color: #2B70A8;
      font-size: 16px;
      line-height: 21px;
      text-align: center;

      margin: 0 0 20px;
    }

    .steps {
      li {
        display: flex;
        align-items: center;

        margin: 0 0 30px;

        .number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 45px;
          height: 45px;
          min-width: 45px;
          border-radius: 50%;

          background-color: #F8BC49;

          color: white;
          font-weight: 700;
          font-size: 20px;

          margin: 0 30px 0 0;
        }
      }

      p {
        color: #242424;
        font-size: 13px;
        line-height: 17px;
      }
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

export { StyledConfirmationSignupBanner };

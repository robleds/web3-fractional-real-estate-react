import styled from "styled-components";

const StyledIntroduction = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: white;

  padding: 100px 0 40px;

  .text {
    display: flex;
    flex-flow: column nowrap;

    h2 {
      color: #2B70A8;
      font-size: 36px;
      line-height: 48px;

      max-width: 400px;

      margin: 0 0 35px;
    }

    p {
      color: #727272;
      font-size: 16px;
      line-height: 21px;

      max-width: 375px;

      margin-bottom: 20px;
    }
  }

  .video {
    width: 90%;
    max-width: 500px;
    aspect-ratio: 16 / 9;
  }
`;

export { StyledIntroduction };

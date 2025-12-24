import styled from "styled-components";

const StyledIntroduction = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: white;

  padding: 130px 15px 230px;

  h2 {
    color: #2B70A8;
    font-size: 36px;
    line-height: 48px;

    margin: 0 0 35px;
  }

  p {
    color: #727272;
    font-size: 16px;
    line-height: 21px;

    max-width: 680px;
  }

  @media (min-width: 1024px) {
    h2 {
      width: 400px;
      min-width: 400px;
    }
  }
`;

export { StyledIntroduction };

import styled from "styled-components";

const StyledTermsOfUse = styled.div`
  display: flex;
  flex-flow: column nowrap;

  background-color: #FFF;

  padding: 80px 0 45px;

  .title {
    font-size: 24px;
    color: #242424;

    margin: 0 0 20px;
  }

  h3, h2 {
    font-size: 20px;
    color: #242424;

    margin: 20px 0;
  }

  ol {
    list-style-type: decimal;

    margin: 10px 0 10px 50px;
  }

  p {
    color: #727272;
    font-size: 16px;
    line-height: 21px;

    text-align: justify;
  }

  li {
    color: #727272;
    font-size: 16px;
    line-height: 21px;

    margin: 0 0 5px;

    text-align: justify;
  }
`;

export { StyledTermsOfUse };

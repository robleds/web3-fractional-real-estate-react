import styled from "styled-components";

const StyledValueCard = styled.div`
  width: 100%;
  height: 100px;

  padding: 18px 12px;
  margin-bottom: 35px;

  bakground-color: white;
  box-shadow: 0px 0px 8px 0px #00000040;
  border-radius: 4px;

  p {
    font-size: 11px;
    color: #242424;

    margin: 0 0 15px;
  }

  span {
    font-size: 22px;
  }

  .invested {
    color: #2B70A8;
  }

  .received {
    color: #64B514;
  }

  @media (min-width: 1024px) {
    width: 180px;
    min-width: 180px;
    margin: 0 20px 35px 0;
  }
`;

export { StyledValueCard };

import styled from "styled-components";

const StyledSignupConfirmation = styled.div`
  display: flex;
  flex: 10;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  background-color: white;

  padding: 65px 15px 35px;

  h1 {
    color: #2B70A8;
    font-size: 18px;
    margin: 5px 0 50px;
  }

  p {
    color: #727272;
    font-size: 14px;
    line-height: 18.5px;

    max-width: 440px;

    margin: 0 0 20px;
  }

  button {
    margin: 40px 0 0;
  }
`;

export { StyledSignupConfirmation };

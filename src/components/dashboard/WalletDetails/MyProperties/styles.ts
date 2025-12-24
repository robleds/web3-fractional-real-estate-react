import styled from "styled-components";

const StyledMyProperties = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0;

  .my-props {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin: 0 0 25px;

    h4 {
      color: #2B70A8;
      font-size: 14px;
    }

    a {
      color: #242424;
      font-size: 11px;
      text-decoration: underline;
    }
  }

  .properties {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 380px;
    margin: 0 20px 0 0;
  }
`;

export { StyledMyProperties };

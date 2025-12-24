import styled from "styled-components";

const StyledInitialAuthBanner = styled.div`
  display: none;
  flex: 9;
  flex-flow: column nowrap;
  justify-content: space-between;

  background-image: url(/static/images/auth-bg.png);
  background-position: center bottom;
  background-size: cover;

  padding: 105px 85px 400px;

  a {
    width: 200px;
  }

  h2 {
    width: 100%;
    max-width: 500px;

    color: white;
    font-size: 32px;
    line-height: 42px;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export { StyledInitialAuthBanner };

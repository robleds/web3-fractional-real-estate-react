import styled from "styled-components";

const StyledTeam = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  padding: 135px 0 150px;

  .title {
    text-align: center;

    margin: 0 0 55px;

    h2 {
      color: #242424;
      font-size: 28px;

      margin: 0 0 10px;
    }

    p {
      color: #727272;
      font-size: 16px;

      max-width: 450px;
    }
  }

  .team {
    display: grid;
    grid-template-columns: 1fr;

    width: 100%;
    max-width: 1000px;
  }

  @media (min-width: 614px) {
    .team {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .team {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export { StyledTeam };

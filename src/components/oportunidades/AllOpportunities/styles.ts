import styled from "styled-components";

const StyledAllOpportunities = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;

  padding: 0 0 50px;

  .top {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;


    margin: 0 0 40px;

    width: 100%;

    .title {
      color: #2B70A8;
      font-size: 24px;

      margin-bottom: 10px;
    }

    .filters {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;

      width: 380px;

      select {
        width: 180px;
        height: 35px;

        border-radius: 3px;
        border: 1px solid #C4C4C4;
        box-shadow: 0 0 2px rgba(0, 0, 0, .25);

        color: #727272;
        font-size: 11px;

        margin-bottom: 10px;

        &:focus {
          outline: none;
        }
      }
    }
  }

  ul {
    display: grid;
    justify-items: center;
    grid-template-columns: 280px;
    gap: 24px 20px;
  }

  @media (min-width: 630px) {
    ul {
      grid-template-columns: 280px 280px;
    }
  }

  @media (min-width: 736px) {
    .top {
      flex-flow: row nowrap;

      .filters {
        flex-flow: row nowrap;
      }
    }
  }

  @media (min-width: 936px) {
    ul {
      grid-template-columns: 280px 280px 280px;
    }
  }

  @media (min-width: 1230px) {
    ul {
      grid-template-columns: 280px 280px 280px 280px;
    }
  }
`;

export { StyledAllOpportunities };

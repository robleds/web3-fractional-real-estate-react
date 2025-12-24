import styled from "styled-components";

const StyledPage = styled.main`
  width: 100%;
  padding: 60px 0 0;
  .page-content-oportunity {
    > div {
      flex-direction: column-reverse;
      @media(min-width:768px){
        flex-direction: row;
      }
    }
  }
`;

export { StyledPage };

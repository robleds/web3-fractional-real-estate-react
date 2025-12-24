import styled from "styled-components";

const StyledChart = styled.div`
  display: flex;
  position: relative;

  height: 345px;
  width: 100%;

  margin-top: 25px;

  padding: 60px 30px 25px;

  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px #00000040;

  background-color: white;

  span {
    position: absolute;
    top: 20px;
    left: 10px;

    color: #242424;
    font-size: 11px;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 415px);
  }
`;

export { StyledChart };

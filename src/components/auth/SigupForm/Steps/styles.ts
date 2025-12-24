import styled from "styled-components";

const StyledSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  font-size: 14px;

  width: 170px;
  height: 30px;

  position: relative;
  margin: 0 0 30px;

  div:not(.separator) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    width: 30px;
    height: 30px;
    border-radius: 50%;

    position: relative;
    z-index: 10;

    cursor: pointer;
  }

  .current {
    background-color: #2B70A8;
  }

  .done {
    background-color: #64B514;
  }

  .todo {
    background-color: #C4C4C4;
  }

  .separator {
    width: 170px;
    height: 0px;

    position: absolute;
    top: 14px;

    border-bottom: 2px dashed #C4C4C4;
    z-index: 0;
  }
`;

export { StyledSteps };

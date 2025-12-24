import styled from "styled-components";

const StyledQuestion = styled.li`
  display: flex;
  width: 100%;
  position: relative;

  background-color: white;

  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .25);

  margin: 0 0 30px;

  cursor: pointer;

  details {
    width: 100%;

    padding: 40px;

    transition: 0.2s;

    summary {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      color: #242424;
      font-size: 20px;

      .arrow {
        min-width: 20px;
        min-height: 20px;
      }
    }

    p {
      color: #727272;
      font-size: 16px;
      line-height: 21px;
      text-align: justify;

      margin: 30px 0 0;
    }
  }

  .item-closed {
    padding: 20px 40px;
  }
`;

export { StyledQuestion };

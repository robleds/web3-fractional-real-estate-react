import styled from "styled-components";

const StyledMember = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 180px;

  text-align: center;
  font-size: 12px;
  color: #727272;

  .image {
    width: 180px;
    height: 180px;

    border-radius: 50%;

    margin: 0 0 45px;
  }

  .member {
    margin: 0 0 auto;
    h3 {
      color: #242424;
      font-size: 18px;

      margin: 0 0 15px;
    }

    p {
      font-size: 14px;

      margin: 0 0 20px;
    }
  }

  .break {
    display: block;
    width: 30px;
    height: 3px;

    background-color: #2B70A8;

    margin: 0 0 25px;
  }

  .description {
    line-height: 16px;
    margin: 0 0 20px;
  }
`;

export { StyledMember };

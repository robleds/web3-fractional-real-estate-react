import styled from "styled-components";

type OpProps = {
  image: string
}

const StyledOpportunity = styled.div<OpProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;

  padding: 30px 25px 40px;
  margin: 0 auto 20px;

  width: 100%;
  max-width: 380px;
  min-width: 280px;
  height: 420px;
  border-radius: 4px;

  background-image: ${props => `url(${props.image})`};
  background-color: #727272;
  background-size: cover;
  background-position: center;

  color: white;

  .tags {
    display: flex;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 14px;
      text-transform: uppercase;

      height: 40px;
      min-width: 100px;
      padding: 0 25px;
      margin-right: 15px;

      border-radius: 50px;
    }
  }

  .title {
    h3 {
      font-size: 42px;
      margin-bottom: 15px;
    }

    .location {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      span {
        font-size: 16px;
      }
    }
  }

  .description {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 0px;
    border-radius: 0 0 4px 4px;

    margin-left: -25px;

    font-size: 14px;
    color: #242424;
    background-color: #F2F2F2;

    transition: height 0.15s ease-in 0.05s, padding 0s ease 0.15s;

    .investors {
      display: flex;

      svg {
        margin-right: 15px;
      }
    }

    .invest-value {
      display: inline-block;
      font-size: 25px;
      color: #64B514;

      margin-top: 5px;
    }

    > * {
      visibility: hidden;
    }
  }

  &:hover {
    .description {
      padding: 30px 20px 20px;
      height: 235px;

      > * {
        visibility: visible;
        transition: visibility 0.01s ease-out 0.19s;
      }
    }
  }
`;

export { StyledOpportunity };

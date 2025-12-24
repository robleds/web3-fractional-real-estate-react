import styled from "styled-components";

type HeProps = {
  height?: number;
  url?: string;
}

const StyledHeader = styled.header<HeProps>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: ${props => props.height || 200}px;
  background-image: url(${props => props.url || "/static/images/small-header-bg.png"});
  background-position: center;
  background-size: cover;
  padding: 110px 0 40px;
  h2 {
    color: white;
    font-size: 36px;
    position: relative;
    z-index: 10;
  }
  .backdrop {
    display: ${props => props.url ? "initial" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: sepia(.35);
    background-color: #000000AA;
  }
  .search-bar {
    display: flex;
    align-items: stretch;
    margin: 30px 0 0;
    height: 55px;
    width: 100%;
    .icon {
      display: flex;
      align-items: center;
      border-radius: 4px 0 0 4px;
      padding: 0 25px;
      background-color: white;
    }
    input {
      border: none;
      border-radius: 0 4px 4px 0;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
`;

export { StyledHeader };
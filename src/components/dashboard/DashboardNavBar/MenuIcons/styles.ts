import styled from "styled-components";

const StyledMenuIcons = styled.div`
  display: none;
  position: relative;

  > button:not(:last-of-type) {
    margin-right: 30px;
  }

  button {
    border: none;
    background: transparent;
    padding: 0;
  }

  > button {
    border-radius: 50%;
  }

  .selected {
    background-color: #FFFFFF40;
  }

  .acc-menu {
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-flow: column nowrap;

    height: 160px;
    padding: 27px 20px;

    position: absolute;
    right: -15px;
    bottom: -172px;

    background-color: #F2F2F2;
    color: #474747;

    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;

    box-shadow: 0px 4px 4px 0px #00000040;

    visibility: hidden;
    opacity: 0;

    transition: 0.1s;

    &.show {
      visibility: visible;
      opacity: 1;
    }

    svg {
      position: absolute;
      top: -13px;
      right: 15px;
    }
  }

  @media (min-width: 1024px) {
    display: initial;
  }
`;

export { StyledMenuIcons };

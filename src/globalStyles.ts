import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    cursor: inherit;
    box-sizing: border-box;
  }
  body {
    font-family: 'PT Serif', serif;
  }
  __next {
    position: relative;
    height: 100%;
    min-height: 100vh;
  }
  a, button {
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .hidden {
    display: none !important;
  }
  .bold {
    font-weight: 700;
  }
  .underline {
    border-bottom: 2px solid black;
    line-height: 0.8;
  }
`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    box-sizing: border-box;
    background-color: #444;
  }
  a {
    text-decoration:none;
  }
`;

export default GlobalStyle;

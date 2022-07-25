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
    color:#fff;
    font-weight:bold;
    font-size:16px;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-size: 62.5%; //10px
  }

  body {
    font-size: 1.6rem; //16px
    margin: 0 auto;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;

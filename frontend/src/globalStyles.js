import { createGlobalStyle } from 'styled-components';
import { above, color } from './util';

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
    height: 100%;
    overflow-y: scroll;

    /* ${above.med`
      margin: 0 auto;
      max-width: 1600px;
      border-left: 1px solid ${color.yellow};
      border-right: 1px solid ${color.yellow};
    `}; */
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

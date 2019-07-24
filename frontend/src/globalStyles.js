import { styledNormalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

*, *:before, *:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

/* test */
body,
html {
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
`;

export default GlobalStyle;

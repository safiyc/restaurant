import React from 'react';
import { styledNormalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <styledNormalize />
      <GlobalStyles />
      <Layout />
    </>
  );
}

export default App;

import React from 'react';
import { styledNormalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';

import Layout from './components/Layout';
import Section from './components/Section';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <styledNormalize />
      <GlobalStyles />
      <Layout>
        <Section name="About" />
        <Section name="mini-menu" />
        <Section name="Testimonials" />
        <Contact />
      </Layout>
    </>
  );
}

export default App;

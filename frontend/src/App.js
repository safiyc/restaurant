import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';

import Layout from './components/Layout';
import Section from './components/Section';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Layout>
        <AboutUs />
        <Section name="mini-menu" />
        <Section name="Testimonials" />
        <Contact />
      </Layout>
    </>
  );
}

export default App;

import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';

import Layout from './components/Layout';
// import Section from './components/Section';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import MiniMenu from './components/MiniMenu';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Layout>
        <AboutUs />
        <MiniMenu />
        <Testimonials />
        <Contact />
      </Layout>
    </>
  );
}

export default App;

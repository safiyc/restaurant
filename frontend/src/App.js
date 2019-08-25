import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './globalStyles';

import Layout from './components/Layout';
import Contact from './components/Contact/Contact';
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

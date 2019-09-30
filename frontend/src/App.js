import React from 'react';

import Layout from './components/Layout';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs';
import MiniMenu from './components/MiniMenu';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
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

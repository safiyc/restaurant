import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';

// import { above } from '../util';

const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1.5rem auto 1.5rem; */
`

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <AboutUs />
      {props.children}
      <Footer />
    </Wrapper>
  );
}

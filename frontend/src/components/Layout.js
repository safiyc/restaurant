import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

import { above } from '../util';  // test

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1.5rem auto 1.5rem; */

  /* test */
  /* ${above.med`
    border: 4px solid yellow;
  `}
  border: 2px dashed green; */
  /* end test */
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  );
}

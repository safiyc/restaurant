import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  /* display: grid; */
`

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  );
}

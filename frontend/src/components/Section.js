import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;

  border: 1px solid red;
`

export default function Section(props) {
  return (
    <Wrapper>
      <h2>{props.name}</h2>
      {props.children}
    </Wrapper>
  );
}

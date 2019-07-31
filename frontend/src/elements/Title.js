import React from 'react';
import styled from 'styled-components';
import { color } from '../util';

const S = {};
S.h3 = styled.h3`
  display: flex;
  margin: 0 auto;
  color: ${color.black};
  text-decoration: underline;
  text-transform: capitalize;
  z-index: 20;
`;

export default function title(props) {
  return <S.h3>{props.title}</S.h3>;
}

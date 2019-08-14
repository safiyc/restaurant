// import React from 'react';
import styled from 'styled-components';
import { color } from '../util';

const Button = styled.button`
  background-color: ${color.yellow};
  border: none;
  width: 110px;
  height: 30px;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  color: black;

  &:hover {
    color: white;
  }
`;

export default Button;
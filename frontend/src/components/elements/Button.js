import React from 'react';
import styled from 'styled-components';
import { color } from '../../util';

const Btn = styled.button`
  position: absolute;
  top: ${props => props.top};
  left: 60px;
  z-index: ${props => props.zIndex || 10};

  background-color: ${color.yellow};
  border: none;
  width: 110px;
  height: 30px;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 600;

  @media (max-width: 600px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    color: white;
  }
`;

const Button = () => {
  return <Btn>Reserve A Table</Btn>;
};

export default Button;

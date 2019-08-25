// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
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

const ButtonReserve = () => {
  return (
    <Link to='/reserve'>
      Reserve A Table
    </Link>
  )
};

export { Button, ButtonReserve };
import styled from 'styled-components';
import { color } from '../util';

// #region title squigglyLine
export const Title = styled.div`
  /* grid-area: title; */
  color: black;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const Squiggly = styled.div`
  overflow: hidden;
  position: relative;
  width: 50px;
  height: 50px;
  
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const SquigglyLine = styled.div`
  position: absolute;
  width: 49px;
  height: 10px;

  &.line1 {
    background: linear-gradient(-45deg, transparent, transparent 40%, ${color.yellow} 40%, transparent 51%);
  }

  &.line2 {
    background: linear-gradient(45deg, transparent, transparent 40%, ${color.yellow} 40%, transparent 51%);
  }

  &.lineSize {
    background-size: 14px 15px;
  }
`;
// #endregion
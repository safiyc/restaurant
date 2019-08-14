import styled from 'styled-components';
import { above, color } from '../util';

export const ImgsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  margin-top: -30px;
  text-align: center;

  ${above.med`
    margin-top: -40px;
    text-align: initial;
  `};
`;

export const ImgText = styled.h2`
  position: absolute;
  
  z-index: 10;
  color: white;
  font-size: 2.85rem;
  text-shadow: 0 0 2px black;
  font-weight: 600;
  left: 0;
  right: 0;
  top: 170px;
  margin-left: auto;
  margin-right: auto;

  & > .txt_gold {
    color: ${color.yellow};
  }

  & > .txt_sub {
    font-size: 1.5rem;
    display: block;
    margin-top: 5px;
    font-weight: 100;
  }

  ${above.med`
    left: 60px;
    margin-left: initial;
    margin-right: initial;
  `};
`;

export const ImgGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;

export const ImgMain = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ImgFrame = styled.div`
  background-color: ${color.yellow};
  position: absolute;
  top: -12px;
  width: 100%;
  height: 384px;
  z-index: -1;

  ${above.med`
    width: calc(100% - 60px);
    right: 0;
  `};
`;

export const ImgMini = styled.img`
  display: none;

  ${above.med`
    display: initial;
    position: absolute;
    bottom: -68px;
    left: -160px;
    width: 260px;
    z-index: -5;
    object-fit: cover;
    object-position: center;
  `};
`;
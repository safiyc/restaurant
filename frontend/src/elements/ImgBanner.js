import styled from 'styled-components';
import { color } from '../util';

export const ImgsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  margin-top: -40px;

  @media (max-width: 600px) {
    margin-top: -30px;
    text-align: center;
  }
`;

export const ImgText = styled.h2`
  position: absolute;
  top: 170px;
  left: 60px;
  z-index: 10;
  color: white;
  font-size: 2.85rem;
  text-shadow: 0 0 2px black;
  font-weight: 600;

  & > .txt_gold {
    color: ${color.yellow};
  }

  & > .txt_sub {
    font-size: 1.5rem;
    display: block;
    margin-top: 5px;
    font-weight: 100;
  }

  @media (max-width: 600px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
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
  position: absolute;
  top: -12px;
  right: 0;
  width: calc(100% - 60px);
  height: 384px;
  z-index: -1;
  background-color: ${color.yellow};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ImgMini = styled.img`
  position: absolute;
  bottom: -68px;
  left: -160px;
  width: 260px;
  z-index: -5;
  object-fit: cover;
  object-position: center;

  @media (max-width: 600px) {
    display: none;
  }
`;
import styled from 'styled-components';
import Button from '../../elements/Button';

import { imgAboutMain, imgAboutMini } from '../../asset/img';
import { color } from '../../util';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 5% 30%;
  grid-template-rows: 20% 40% 20%;
  grid-template-areas:
    'title . imgContainer'
    'desc . imgContainer'
    'reserve . imgContainer';
  width: calc(100% - 30px);
  margin: 0 auto;
  color: grey;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      'title'
      'imgContainer'
      'reserve'
      'desc';
    width: 100%;
  }
`;

// #region title squigglyLine
export const Title = styled.div`
  grid-area: title;
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

export const SqiugglyLine = styled.div`
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

// #region description
export const Description = styled.div`
  grid-area: desc;
  margin-right: 20px;
  text-align: justify;
  line-height: 30px;
  font-weight: 600;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    padding-left: 10px;
  }

  & p:first-child {
    color: black;
    font-size: 1.8rem;
  }
`;
// #endregion

// #region reserve button container
export const ReserveContainer = styled.div`
  grid-area: reserve;
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: 80px;

  @media (max-width: 800px) {
    margin-top: 70px;
  }

  @media (max-width: 600px) {
    margin: 0 auto 10px;
    height: unset;
  }

  & span {
    color: black;
    font-weight: 600;
  }
`;

export const ButtonAbout = styled(Button)`
  margin-right: 15px;

  &.reserve_contact {
    color: red;
  }
`;
// #endregion

// #region img container
export const ImgContainer = styled.div`
  grid-area: imgContainer;
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 100%;
    height: 350px;
    margin-top: -10px;
    margin-bottom: 20px;
  }
`;

export const ImgFrameAbout = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100%;
  height: 100%;
  z-index: 5;
  border: 4px solid ${color.yellow};

  @media (max-width: 600px) {
    border: none;
    border-top: 12px solid ${color.yellow};
    border-bottom: 12px solid ${color.yellow};
    top: 0;
    right: 0;
  }
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

export const ImgMini = styled.img`
  position: absolute;
  bottom: -75px;
  left: -130px;
  width: 250px;
  z-index: -5;
  object-fit: cover;
  object-position: center;

  @media (max-width: 850px) {
    display: none;
  }
`;
// #endregion

export { imgAboutMain, imgAboutMini };
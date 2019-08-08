import styled from 'styled-components';
import Button from '../../elements/Button';

import { imgAboutMain, imgAboutMini } from '../../asset/img';
import { color } from '../../util';
import { Title, Squiggly, SquigglyLine } from '../../elements/SquigglyTitle';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 5% 30%;
  grid-template-rows: 20% 40% 20%;
  grid-template-areas:
    'title . imgContainer'
    'desc . imgContainer'
    'reserve . imgContainer';
  width: calc(100% - 30px);
  height: 450px;
  margin: 0 auto;
  color: darkgrey;

  /* test */
  padding-left: 70px;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      'title'
      'imgContainer'
      'reserve'
      'desc';
    width: 100%;
    height: unset;
    padding-left: unset;

    /* helper */
    /* border: 10px solid red; */
  }
`;

// #region title & squigglyLine
export const AboutTitle = styled(Title)`
  grid-area: title;
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

      & p:first-child {
      margin-top: unset;
    }
  }

  & p:first-child {
    color: gray;
    font-size: 1.8rem;
    margin-top: 0;
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

  & .reserve_contact {
    color: gray;
  }

  & span {
    color: black;
    font-weight: 600;
  }
`;

export const ButtonAbout = styled(Button)`
  margin-right: 15px;
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
    top: -1px;
    right: 0;
    height: 101%
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

export { imgAboutMain, imgAboutMini, SquigglyLine, Squiggly };
import styled from 'styled-components';
import Button from '../../elements/Button';

import { imgAboutMain, imgAboutMini } from '../../asset/img';
import { color, above } from '../../util';
import { Title, Squiggly, SquigglyLine } from '../../elements/SquigglyTitle';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    'title'
    'imgContainer'
    'reserve'
    'desc';
  width: 100%;
  color: darkgrey;

  ${above.med`
    grid-template-columns: 60% 2% 30%;
    grid-template-rows: 20% auto auto;
    grid-template-areas:
      'title . imgContainer'
      'desc . imgContainer'
      'reserve . imgContainer';
    width: calc(100% - 30px);
    height: 450px;
    margin: 0 auto;

    padding-left: 70px;
  `};
`;

export const AboutTitle = styled(Title)`
  grid-area: title;
  padding-left: 10px;

  ${above.med`
    padding-left: initial;
  `};
`;

export const Description = styled.div`
  grid-area: desc;
  text-align: justify;
  line-height: 30px;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 10px;

  & p:first-child {
    margin-top: 10px;
    color: gray;
  }
  
  ${above.med`
    margin-right: 20px;
    padding-left: initial;

    & p:first-child {
      font-size: 1.8rem;
      margin-top: 5px;
    }
  `};
`;

// #region reserve button container
export const ReserveContainer = styled.div`
  grid-area: reserve;
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 auto 10px;

  & .reserve_contact {
    color: gray;
  }

  & span {
    color: black;
    font-weight: 600;
  }

  ${above.med`
    margin: unset;
    margin-top: -25px;
  `};
`;

export const ButtonAbout = styled(Button)`
  margin-right: 15px;
`;
// #endregion

// #region container for img
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-top: -10px;
  margin-bottom: 20px;
  
  ${above.med`
    grid-area: imgContainer;
    height: 400px;
    margin-top: 20px;
  `};
`;

export const ImgFrameAbout = styled.div`
  position: absolute;
  top: -1px;
  right: 0;
  height: 101%;
  width: 100%;
  border: none;
  border-top: 12px solid ${color.yellow};
  border-bottom: 12px solid ${color.yellow};

  ${above.med`
    top: -20px;
    right: -20px;
    height: 100%;
    border: 4px solid ${color.yellow};
    z-index: 5;
  `};
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
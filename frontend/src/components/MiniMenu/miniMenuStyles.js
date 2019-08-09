import styled from 'styled-components';
import Button from '../../elements/Button';
import { above, color } from '../../util';
import { Title, Squiggly, SquigglyLine } from '../../elements/SquigglyTitle';
import {
  imgMiniMenu1,
  imgMiniMenu2,
  imgMiniMenu3,
  imgMiniMenu4,
  imgMiniMenuLeft,
  imgMiniMenuRight
} from '../../asset/img';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  color: gray;

  ${above.med`
    width: calc(100% - 170px);
    margin: 50px auto 40px;
    padding-left: 0;
  `};
`;

export const TitleMiniMenu = styled(Title)`
  & *{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Subheading = styled.div`
  text-align: center;
  margin-bottom: 0;
  margin-top: 10px;
`;

export const Description = styled.div`
  margin: -35px auto 0;
  text-align: justify;
  line-height: 30px;
  font-weight: 600;
  font-size: 1.5rem;
  color: gray;

  & p {
    margin-bottom: 0;
    margin-top: 15px;
  }

  & p:last-child {
    text-align: right;
    margin-top: 10px;
  }

  & p span {
    color: black;
    margin-left: 5px;
  }

  ${above.med`
    text-align: center;
    & p:last-child {
      font-size: 1.3rem;
      margin-top: 0;
    }
  `};

  @media (min-width: 895px) {
    & p:last-child {
      margin-top: 0;
    }
    & p span {
      display: block;
      margin-left: 15px;
    }
  }
`;

export const ButtonAbout = styled(Button)`
  display: block;
  margin: 20px auto 0;
`;

export const ImgTextContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  margin-top: 15px;
  grid-template-columns: 1fr;
  background-color: white;

  ${above.med`
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    // width: calc(100% - 110px);
    width: 100%;
    height: 600px;
    margin: 65px auto 20px;
    box-shadow: 0 -2px 8px 1px rgba(100,100,250,.1);
  `};
`;

export const SubContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  border-top: 1px solid ${color.yellow};

  &.reverse_subcontainer {
    flex-direction: row-reverse;
  }

  &.reverse_subcontainer img {
    right: unset;
    left: 0;
  }

  ${above.med`
    margin-bottom: unset;
    border-top: unset;

    &.reverse_subcontainer {
      flex-direction: unset;
    }
  `};
`;

export const Img = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  right: 0;

  ${above.med`
    position: unset;
  `};
`;

export const ImgDesc = styled.div`
  width: 50%;
  padding: 0 15px;
`;

export const ImgBehind = styled.img`
  display: none;
  position: absolute;
  z-index: -5;
  object-fit: cover;
  object-position: center;
  width: 250px;
  filter: blur(1px);

  ${above.med`
    display: block;
  `};
`;

export const ImgBehindLeft = styled(ImgBehind)`
  ${above.med`
    bottom: 140px;
    left: -80px;
  `};
`;

export const ImgBehindRight = styled(ImgBehind)`
  ${above.med`
    bottom: 250px;
    right: -85px;
    transform: scaleX(-1);
  `};
`;
// #endregion

export {
  imgMiniMenu1,
  imgMiniMenu2,
  imgMiniMenu3,
  imgMiniMenu4,
  imgMiniMenuLeft,
  imgMiniMenuRight,
  SquigglyLine,
  Squiggly
};
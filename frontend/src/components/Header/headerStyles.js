import styled from 'styled-components';

import {
  HeaderContainer,
  HoursPhone,
  HoursPhoneList,
  HoursPhoneIcons,
  HoursIcon,
  PhoneIcon
} from '../HeaderPartial/headerPartialStyles';

import {
  ImgsContainer,
  ImgText,
  ImgGradient,
  ImgMain,
  ImgFrame,
  ImgMini
} from '../../elements/ImgBanner';

import { Button } from '../../elements/Button';

import {
  menuExpandIcon,
  homeIcon,
  menuIcon,
  partiesIcon,
  businessIcon,
  cateringIcon,
  contactIcon,
  imgHeaderMain,
  imgHeaderMini
} from '../../asset/img';

import { above, color } from '../../util';

// styles for HoursPhone(and nested) in file:
// headerPartialstyles.js

// #region HeaderContainer
export const Wrapper = styled(HeaderContainer)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    'logo hoursphone navsection'
    'imgscontainer imgscontainer imgscontainer';
  width: 100%;
  height: 475px;
  margin-bottom: 0;

  ${above.med`
    grid-auto-flow: column;
    grid-template-rows: 100px auto;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'logo hoursphone'
      'navsection imgscontainer';
    height: initial;
    padding-left: 45px;
    margin-bottom: 100px;
  `};
`;
// #endregion

// #region NavSection
export const NavSection = styled.div`
  grid-area: navsection;
  position: relative;
  list-style: none;
  justify-self: end;

  @media (max-width: 760px){
    &:hover div {
      display: block;
      margin-top: 0;
      margin-bottom: 0;
      width: 250px; /* this value to prevent dropdown menu mess with screen width */ 
    }
  }

  &:hover span {
    border: 3px solid black;
  }

  ${above.med`
    display: inline-block;
    margin: 10px 10px 0 0;
    padding-left: 35px;
    justify-self: initial;

    &:hover span {
      border: none;
    }
  `};
`;

export const NavLinks = styled.div`
  display: none;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px ${color.yellow};
  text-align: center;
  right: 0;
  z-index: 100;

  ${above.med`
    display: initial;
    position: initial;
    background-color: initial;
    box-shadow: initial;
    right: initial;
    text-align: initial;
    width: 130px;
  `};
`;

export const MenuExpandIcon = styled.span`
  display: inline-block;
  background-image: url(${menuExpandIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 29px;
  margin-top: 14px;
  margin-right: 10px;

  ${above.med`
    display: none;
  `};
`;

export const LinksList = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 30px;
  white-space: nowrap;
  align-items: center;
  margin: 3px auto;
  width: 105%;

  & > h4 {
    margin: 0;

    ${above.med`
      min-width: ${props => (props.widthBM ? '185px' : '135px')};
    `};
  }

  & > h4 > .nav_links {
    display: inline-block;
    color: ${color.black};
    text-decoration: none;
    width: 100%;
    margin: 0 auto;

    ${above.med`
      display: inline;
    `};
  }

  & > h4 > .nav_links:hover {
    background-color: ${color.yellow};

    ${above.med`
      background-color: initial;
      color: ${color.yellow};
    `};
  } 
`;

export const NavIcons = styled.span`
  display: none;

  ${above.med`
    display: inline-block;
    width: 33px;
    height: 30px;
    vertical-align: middle;
    margin-right: 12px;
    transform: scale(0.85);
  `};
`;

export const HR = styled.div`
  display: none;

  ${above.med`
    display: initial;
    width: 100%;
    border-top: 0.1rem solid #efefef;
  `}; 
`;
// #endregion

// #region HeaderImgContainer
export const HeaderImgContainer = styled(ImgsContainer)`
  grid-area: imgscontainer;
`;

export const HeaderButton = styled(Button)`
  position: absolute;
  top: 275px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;

  ${above.med`
    left: 60px;
    margin-left: initial;
    margin-right: initial;
  `};
`;
// #endregion

// #region icon img exports
export const HomeIcon = styled(NavIcons)`
  background-image: url(${homeIcon});
`;

export const MenuIcon = styled(NavIcons)`
  background-image: url(${menuIcon});
`;

export const PartiesIcon = styled(NavIcons)`
  background-image: url(${partiesIcon});
`;

export const BusinessIcon = styled(NavIcons)`
  background-image: url(${businessIcon});
`;

export const CateringIcon = styled(NavIcons)`
  background-image: url(${cateringIcon});
`;

export const ContactIcon = styled(NavIcons)`
  background-image: url(${contactIcon});
`;
// #endregion

export {
  ImgText,
  ImgGradient,
  ImgMain,
  ImgMini,
  ImgFrame,
  imgHeaderMain,
  imgHeaderMini,
  HoursPhone,
  HoursPhoneList,
  HoursPhoneIcons,
  HoursIcon,
  PhoneIcon
}
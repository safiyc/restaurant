import styled from 'styled-components';

import {
  ImgsContainer,
  ImgText,
  ImgGradient,
  ImgMain,
  ImgFrame,
  ImgMini
} from '../../elements/ImgBanner';

import Button from '../../elements/Button';

import {
  logo,
  menuExpandIcon,
  homeIcon,
  menuIcon,
  partiesIcon,
  businessIcon,
  cateringIcon,
  contactIcon,
  hoursIcon,
  phoneIcon,
  imgHeaderMain,
  imgHeaderMini
} from '../../asset/img';

import { above, color } from '../../util';

// #region HeaderContainer
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    'logo hoursphone navsection'
    'imgscontainer imgscontainer imgscontainer';
  width: 100%;
  height: 500px;
  margin-bottom: 0;

  ${above.med`
    grid-auto-flow: column;
    grid-template-rows: 100px auto;
    grid-template-columns: 300px auto;
    grid-template-areas:
      'logo hoursphone'
      'navsection imgscontainer';
    height: initial;
    margin-bottom: 100px;
    // padding-left: 70px;
    padding-left: 30px
  `};
`;
// #endregion

// #region Logo
export const Logo = styled.div`
  grid-area: logo;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;

  ${above.med`
    width: 250px;
    height: 100px;
    margin-left: 30px;
  `};
`;
// #endregion

// #region HoursPhone
export const HoursPhone = styled.ul`
  grid-area: hoursphone;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  font-size: 1.2rem;
  color: grey;
  height: 25px;
  width: 125px;
  margin-top: 15px;
  margin-right: 5px;
  padding-left: 0;

  ${above.med`
    flex-direction: row;
    width: unset;
    margin: 10px 0 25px;
  `};
`;

export const HoursPhoneList = styled.li`
  position: relative;
  white-space: nowrap;
  padding: 0;


  & > .hrs_contact_label {
    display: none;
  }

  & > .hrs_contact_number {
    position: absolute;
    right: 0;
    color: grey;
  }

  ${above.med`
    padding: 0 20px 0 12px;

    & > .hrs_contact_label {
      display: inline-block;
      margin-top: 5px;
      margin-right: 5px;
    }

    & > .hrs_contact_number {
      position: relative;
      display: inline-block;
      color: black;
      font-weight: 600;
    }
  `};

  &:not(last-child):first-child {
    border-right: none;
    
    ${above.med`
      padding-right: 20px;
      border-right: 1px dashed #efefef;
    `};
  }
`;

export const HoursPhoneIcons = styled.div`
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 25px;
  margin-right: 5px;
  vertical-align: middle;

  ${above.med`
    width: 28px;
  `};
`;

export const HoursIcon = styled(HoursPhoneIcons)`
  background-image: url(${hoursIcon});
  width: 18px;
`;

export const PhoneIcon = styled(HoursPhoneIcons)`
  background-image: url(${phoneIcon});
  width: 23px;
  margin-left: -4px;

  ${above.med`
    margin-left: unset;
  `};
`;
// #endregion

// #region NavSection
export const NavSection = styled.div`
  grid-area: navsection;
  position: relative;
  list-style: none;
  justify-self: end;

  /* issue-link #1 */
  @media (max-width: 760px){
  &:hover div {
    display: block;
    margin-top: 0;
    margin-bottom: 0;
    width: 250px; /* this value to prevent dropdown menu mess with screen width */
    /* helper */ border-color: green;  
  }
  }
  /* end issue */

  &:hover span {
    border: 3px solid black;
  }

  ${above.med`
    display: inline-block;
    margin: 10px 10px 0 0;
    padding-left: 35px;
    justify-self: initial;

    // issue-link #1
    // &:hover div {
      // display: block;
      // border-color: green;
    // }
    // end issue

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

  & > h4 > a {
    display: inline-block;
    color: ${color.black};
    text-decoration: none;
    width: 100%;
    margin: 0 auto;

    ${above.med`
      display: inline;
    `};
  }

  & > h4 > a:hover {
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
  imgHeaderMini
}
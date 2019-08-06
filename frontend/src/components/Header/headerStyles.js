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

import { color } from '../../util';

// #region HeaderContainer
export const HeaderContainer = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 250px auto;
  grid-auto-flow: column;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    grid-template-columns: auto auto auto;
    grid-template-areas:
      'logo hoursphone navsection'
      'imgscontainer imgscontainer imgscontainer';
    margin-bottom: 50px;
    height: auto;
  }
`;
// #endregion

// #region Logo
export const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 100px;
  margin-left: 0;
  order: 1;

  @media (max-width: 600px) {
    width: 150px;
    grid-area: logo;
  }
`;
// #endregion

// #region HoursPhone
export const HoursPhone = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 10px 0 25px;
  font-size: 1.2rem;
  color: grey;
  height: 25px;
  order: 3;

  @media (max-width: 600px) {
    grid-area: hoursphone;
    order: 2;
    flex-direction: column;
    width: 125px;
    padding-left: 0;
    margin-top: 15px;
    justify-self: center;
  }
`;

export const HoursPhoneList = styled.li`
  white-space: nowrap;
  padding: 0 20px 0 12px;
  position: relative;

  & > .hrs_contact_number {
    color: black;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    padding: 0;

    & > .hrs_contact_label {
      display: none;
    }

    & > .hrs_contact_number {
      position: absolute;
      right: 0;
      color: grey;
    }
  }

  &:not(last-child):first-child {
    border-right: 1px dashed #efefef;

    @media (max-width: 600px) {
      border-right: none;
      padding-right: 10px;
    }
  }
`;

export const HoursPhoneIcons = styled.div`
  width: 28px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;

  @media (max-width: 600px) {
    width: 20px;
  }
`;

export const HoursIcon = styled(HoursPhoneIcons)`
  background-image: url(${hoursIcon});

  @media (max-width: 600px) {
    width: 18px;
  }
`;

export const PhoneIcon = styled(HoursPhoneIcons)`
  background-image: url(${phoneIcon});

  @media (max-width: 600px) {
    width: 23px;
    margin-left: -4px;
  }
`;
// #endregion

// #region NavSection
export const NavSection = styled.div`
  list-style: none;
  padding-left: 5px;
  order: 2;

  @media (max-width: 600px) {
    grid-area: navsection;
    justify-self: end;
    order: 3;
    width: 40px;
    margin: 10px 10px 0 0;
    position: relative;
    display: inline-block;

    &:hover div {
      display: block;
    }

    &:hover span {
      border: 3px solid black;
    }
  }
`;

export const NavLinks = styled.div`
  @media (max-width: 600px) {
    display: none;
    position: absolute;
    right: -10px;
    width: 130px;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    z-index: 100;

    & div {
      display: block;
    }

    & div:hover {
      color: ${color.yellow};
    }
  }
`;

export const MenuExpandIcon = styled.span`
  display: none;

  @media (max-width: 600px) {
    display: inline-block;
    width: 40px;
    height: 29px;
    background-image: url(${menuExpandIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const LinksList = styled.div`
  margin: 3px 0;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  line-height: 30px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  & > h4 {
    min-width: ${props => (props.widthBM ? '185px' : '135px')};
    margin: 0;

    @media (max-width: 600px) {
      min-width: unset;
      text-align: center;
    }
  }

  & > h4 > a {
    color: ${color.black};
    text-decoration: none;
  }

  & > h4 > a:hover {
    color: ${color.yellow};
  }
`;

export const NavIcons = styled.span`
  width: 33px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
  transform: scale(0.85);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const HR = styled.div`
  width: 100%;
  border-top: 0.1rem solid #efefef;

  @media (max-width: 600px) {
    display: none;
    border-top: none;
  }
`;

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

// #region HeaderImgContainer
export const HeaderImgContainer = styled(ImgsContainer)`
  order: 4;

  @media (max-width: 600px) {
    grid-area: imgscontainer;
  }
`;

export const HeaderButton = styled(Button)`
  position: absolute;
  top: 275px;
  left: 60px;
  z-index: 100;

  @media (max-width: 600px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
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
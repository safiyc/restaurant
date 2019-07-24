import React from 'react';
import styled from 'styled-components';
import { ImgsContainer, ImgText, ImgGradient, ImgMain, ImgBg, ImgBehind } from '../elements/ImgBanner';
import Button from '../elements/Button';
import logo from '../asset/img/logo.PNG';
import menuExpandIcon from '../asset/img/menu_expand.png';
import homeIcon from '../asset/img/home_icon.PNG';
import menuIcon from '../asset/img/menu_icon.png';
import partiesIcon from '../asset/img/parties_icon.png';
import businessIcon from '../asset/img/business_meetings.png';
import cateringIcon from '../asset/img/catering_icon.png';
import contactIcon from '../asset/img/contact_icon.png';
import hoursIcon from '../asset/img/hours_icon.png';
import phoneIcon from '../asset/img/phone_icon.png';
import peopleDining from '../asset/img/people_dining.png';
import imgBehind from '../asset/img/img_behind.png';

import { color } from '../util';

// #region HeaderContainer
const HeaderContainer = styled.div`
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
    "logo hoursphone navsection"
    "imgscontainer imgscontainer imgscontainer";
  }
`;
// #endregion

// #region Logo
const Logo = styled.div`
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
const HoursPhone = styled.ul`
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

const HoursPhoneList = styled.li`
  white-space: nowrap;
  padding: 0 20px 0 12px;
  position: relative;

  & > .hrs_contact_number {
    color: black;
    font-weight: 600;
  }

  @media (max-width: 600px){
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

    @media (max-width: 600px){
      border-right: none;
      padding-right: 10px;
    }
  }
`;

const HoursPhoneIcons = styled.div`
  width: 28px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;

  @media (max-width: 600px){
    width: 20px;
  }
`;

const HoursIcon = styled(HoursPhoneIcons)`
  background-image: url(${hoursIcon});

  @media (max-width: 600px){
    width: 18px;
  }
`;

const PhoneIcon = styled(HoursPhoneIcons)`
  background-image: url(${phoneIcon});

  @media (max-width: 600px){
    width: 23px;
    margin-left: -4px;
  }
`;
// #endregion

// #region NavSection
const NavSection = styled.div`
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

const NavLinks = styled.div`
  @media (max-width: 600px) {
    display: none;
    position: absolute;
    right: -10px;
    width: 130px;
    background-color: rgba(255,255,255,.75);
    box-shadow: 0 0 2px 0 rgba(0,0,0,.5);
    z-index: 100;

    & div {
      display: block;
    }

    & div:hover {
      color: ${color.yellow};
    }
  }
`;

const MenuExpandIcon = styled.span`
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

const LinksList = styled.div`
  margin: 3px 0;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  line-height: 30px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  & > h4 {
    min-width: ${props => props.widthBM ? '185px' : '135px'};
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

const NavIcons = styled.span`
  width: 33px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
  transform: scale(.85);

  @media (max-width: 600px) {
    display: none;
  }
`;

const HR = styled.div`
  width: 100%;
  border-top: .1rem solid #efefef;

  @media (max-width: 600px) {
    display: none;
    border-top: none;
  }
`;

const HomeIcon = styled(NavIcons)`
  background-image: url(${homeIcon});
`;

const MenuIcon = styled(NavIcons)`
  background-image: url(${menuIcon});
`;

const PartiesIcon = styled(NavIcons)`
  background-image: url(${partiesIcon});
`;

const BusinessIcon = styled(NavIcons)`
  background-image: url(${businessIcon});
`;

const CateringIcon = styled(NavIcons)`
  background-image: url(${cateringIcon});
`;

const ContactIcon = styled(NavIcons)`
  background-image: url(${contactIcon});
`;
// #endregion

// #region HeaderImgContainer
const HeaderImgContainer = styled(ImgsContainer)`
  order: 4;

  @media (max-width: 600px) {
    grid-area: imgscontainer;
  }
`;

const HeaderButton = styled(Button)`
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

  &:hover {
    color: white;
  }
`;
// #endregion

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavSection>
        <MenuExpandIcon />
        <NavLinks>
          <LinksList><h4><HomeIcon /><a href="www.placeholder.com">Home</a></h4><HR /></LinksList>
          <LinksList><h4><MenuIcon /><a href="www.placeholder.com">Menu</a></h4><HR /></LinksList>
          <LinksList><h4><PartiesIcon /><a href="www.placeholder.com">Parties</a></h4><HR /></LinksList>
          <LinksList widthBM><h4><BusinessIcon /><a href="www.placeholder.com">Business Meetings</a></h4><HR /></LinksList>
          <LinksList><h4><CateringIcon /><a href="www.placeholder.com">Catering</a></h4><HR /></LinksList>
          <LinksList><h4><ContactIcon /><a href="www.placeholder.com">Contact</a></h4><HR /></LinksList>
        </NavLinks>
      </NavSection>
      <HoursPhone>
        <HoursPhoneList><HoursIcon /><span className="hrs_contact_label">Opening Hours: </span><span className="hrs_contact_number">11:00 - 11:00 pm</span></HoursPhoneList>
        <HoursPhoneList><PhoneIcon /><span className="hrs_contact_label">Contact: </span><span className="hrs_contact_number">+1(832)000-0000</span></HoursPhoneList>
      </HoursPhone>
      <HeaderImgContainer>
        <ImgGradient />
        <ImgText>
          There Are <span className="txt_gold">1000</span> Reasons
            <br />
          <span className="txt_sub">Why You Should Visit Us.</span>
        </ImgText>
        <HeaderButton>Reserve A Table</HeaderButton>
        <ImgMain src={peopleDining} />
        <ImgBg />
        <ImgBehind src={imgBehind} />
      </HeaderImgContainer>
    </HeaderContainer>
  );
}

export default Header;

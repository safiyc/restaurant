import React from 'react';
import styled from 'styled-components';
import Button from './elements/Button';
import { logo, menuExpandIcon, homeIcon, menuIcon, partiesIcon, businessIcon, cateringIcon, contactIcon, hoursIcon, phoneIcon, peopleDining, imgBehind} from '../asset/img';

import { color } from '../util';

// #region HeaderContainer
const HeaderContainer = styled.div`
  width: 100%;
  height: 500px;
  font-size: 16px;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 250px auto; // 250px auto
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
  font-size: .8rem;
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

  /* max-width: 300px;
  min-width: 250px; */

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
  font-size: .7rem;
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

const HR = styled.hr`
  width: 100%;
  height: 1px;
  border: .005rem solid #efefef;

  @media (max-width: 600px) {
    display: none;
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

// #region ImgContainer
const ImgsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  margin-top: -40px;
  order: 4;

  @media (max-width: 600px) {
    grid-area: imgscontainer;
    margin-top: -30px;
    text-align: center;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 285px;
  left: 60px;
  z-index: 10;

  background-color: ${color.yellow};
  border: none;
  width: 110px;
  height: 30px;
  text-transform: uppercase;
  font-size: .6rem;
  font-weight: 600;

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

const ImgText = styled.h2`
  position: absolute;
  top: 170px;
  left: 60px;
  z-index: 10;
  color: white;
  font-size: 2rem;
  text-shadow: 0 0 2px black;
  font-weight: 600;

  & > .txt_gold {
    color: ${color.yellow};
  }

  & > .txt_sub {
    font-size: 1rem;
    display: block;
    margin-top: 5px;
    font-weight: 100;
  }

  @media (max-width: 600px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.8rem !important;
  }
`;

const ImgGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%,
  rgba(0,0,0,.75) 100%);
`;

const ImgMain = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImgBg = styled.div`
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

const ImgBehind = styled.img`
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
      <ImgsContainer>
        <ImgGradient />
        <ImgText>
          There Are <span className="txt_gold">1000</span> Reasons
            <br />
          <span className="txt_sub">Why You Should Visit Us.</span>
        </ImgText>
        <Button>Reserve A Table</Button>
        <ImgMain src={peopleDining} />
        <ImgBg />
        <ImgBehind src={imgBehind} />
      </ImgsContainer>
    </HeaderContainer>
  );
}

export default Header;

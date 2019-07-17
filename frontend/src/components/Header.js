import React from 'react';
import styled from 'styled-components';
import logo from '../asset/img/logo.PNG';
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

import { color } from '../util'

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  font-size: 16px;
`;

const LeftContent = styled.div`
  width: 35%;
  min-width: 250px;

  // helper
  // border: 1px dotted ${color.yellow};
  // background-color: rgba(0,0,0,.25);
`;

const RightContent = styled.div`
  width: 65%;

  /*
  helper
  border: 1px dotted black;
  */
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 100px;
  margin-left: 0;

  // helper
  // border: 1px dashed red;
`;

const NavSection = styled.ul`
  list-style: none;

  // test
  padding-left: 5px;
`;

const LinksList = styled.li`
  margin: 3px 0;
  text-transform: uppercase;
  font-size: .7rem;
  font-weight: 600;
  line-height: 30px;
  white-space: nowrap;
  display: flex;
  align-items: center;

  & > h4 {
    min-width: ${props => props.widthBM ? '180px' : '135px'};
    margin: 3px 0;
  }

  // TODO: please change 'a' to 'Link'
  & > h4 > a {
    color: black;
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
`;

const HR = styled.hr`
  width: 100%;
  height: 1px;
  border: .005rem solid #efefef;
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

const HoursPhone = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 10px 0 20px;
  font-size: .8rem;
  color: grey;
`;

const HoursPhoneList = styled.li`
  white-space: nowrap;
  padding: 0 20px 0 12px;

  &:not(last-child):first-child {
    border-right: 1px dashed #efefef;
  }

  & > span {
    color: black;
    font-weight: 600;
  }
`;

const HoursPhoneIcons = styled.span`
  width: 28px;
  height: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
`;

const HoursIcon = styled(HoursPhoneIcons)`
  background-image: url(${hoursIcon});
`;

const PhoneIcon = styled(HoursPhoneIcons)`
  background-image: url(${phoneIcon});
`;

const ImgsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
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

  &:hover {
    border: 2px solid white;
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

  & > .txt_gold {
    color: ${color.yellow};
  }

  & > .txt_sub {
    font-size: 1rem;
    text-shadow: none;
    display: block;
    margin-top: 5px;
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
  background-color: gold;
`;

const ImgBehind = styled.img`
  position: absolute;
  bottom: -68px;
  left: -160px;
  width: 260px;
  z-index: -5;
  object-fit: cover;
  object-position: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContent>
        <Logo />
        <NavSection>
          <LinksList>
            <h4>
              <HomeIcon /><a href="www.placeholder.com">Home</a></h4><HR /></LinksList>
          <LinksList><h4><MenuIcon /><a href="www.placeholder.com">Menu</a></h4><HR /></LinksList>
          <LinksList><h4><PartiesIcon /><a href="www.placeholder.com">Parties</a></h4><HR /></LinksList>
          <LinksList widthBM><h4><BusinessIcon /><a href="www.placeholder.com">Business Meetings</a></h4><HR /></LinksList>
          <LinksList><h4><CateringIcon /><a href="www.placeholder.com">Catering</a></h4><HR /></LinksList>
          <LinksList><h4><ContactIcon /><a href="www.placeholder.com">Contact</a></h4><HR /></LinksList>
        </NavSection>
      </LeftContent>
      <RightContent>
        <HoursPhone>
          <HoursPhoneList><HoursIcon />Opening Hours: <span>11:00 - 11:00 pm</span></HoursPhoneList>
          <HoursPhoneList><PhoneIcon />Contact: <span>+1(832)000-0000</span></HoursPhoneList>
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
      </RightContent>
    </HeaderContainer>
  );
}

export default Header;

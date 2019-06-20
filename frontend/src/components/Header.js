import React from 'react';
import styled from 'styled-components';
import logo from '../asset/img/logo.PNG';
import homeIcon from '../asset/img/home_icon.PNG';
import peopleDining from '../asset/img/people_dining.png';
import imgBehind from '../asset/img/img_behind.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 700px;
`;

const LeftContent = styled.div`
  width: 30vw;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100px;
`;

const NavSection = styled.ul`
  list-style: none;
`;

const LinksList = styled.li`
  margin: 3px 0;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 600;
  line-height: 35px;
`;

const HomeIcon = styled.span`
  background-image: url(${homeIcon});
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
`;

const RightContent = styled.div`
  width: 70vw;
  height: 100%;

  // position: relative;
`;

const HoursPhone = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 20px 0;
`;

const HoursPhoneList = styled.li`
  margin: 0 10px;
`;

const HoursPhoneIcons = styled.span`
  background-image: url(${homeIcon});
  width: 35px;
  height: 35px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
`;

const ImgMainContainer = styled.div`
  position: relative;
`;

const ImgMain = styled.img`
  width: 100%;
  box-shadow: 60px 20px 0 0 gold, 60px -20px 0 0 gold;
  margin: 20px;
`;
const ImgBehind = styled.img`
  position: absolute;
  width: 55%;
  bottom: -90px;
  left: -260px;
  z-index: -1;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContent>
        <Logo />
        <NavSection>
          <LinksList><HomeIcon />Home</LinksList>
          <LinksList><HomeIcon /> Menu</LinksList>
          <LinksList><HomeIcon />Parties</LinksList>
          <LinksList><HomeIcon />Business Meetings</LinksList>
          <LinksList><HomeIcon />Catering</LinksList>
          <LinksList><HomeIcon />Contact</LinksList>
        </NavSection>
      </LeftContent>
      <RightContent>
        <HoursPhone>
          <HoursPhoneList><HoursPhoneIcons />Opening Hours: 11:00 - 11:00 pm</HoursPhoneList>
          <HoursPhoneList><HoursPhoneIcons />Contact: +1(832)000-0000</HoursPhoneList>
        </HoursPhone>
        <ImgMainContainer>
          <ImgMain src={peopleDining} />
          <ImgBehind src={imgBehind} />
        </ImgMainContainer>
      </RightContent>
    </HeaderContainer>
  );
}

export default Header;

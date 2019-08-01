import React from 'react';
import * as S from './headerStyles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo />
      <S.NavSection>
        <S.MenuExpandIcon />
        <S.NavLinks>
          <S.LinksList>
            <h4>
              <S.HomeIcon />
              <a href="www.placeholder.com">Home</a>
            </h4>
            <S.HR />
          </S.LinksList>
          <S.LinksList>
            <h4>
              <S.MenuIcon />
              <a href="www.placeholder.com">Menu</a>
            </h4>
            <S.HR />
          </S.LinksList>
          <S.LinksList>
            <h4>
              <S.PartiesIcon />
              <a href="www.placeholder.com">Parties</a>
            </h4>
            <S.HR />
          </S.LinksList>
          <S.LinksList widthBM>
            <h4>
              <S.BusinessIcon />
              <a href="www.placeholder.com">Business Meetings</a>
            </h4>
            <S.HR />
          </S.LinksList>
          <S.LinksList>
            <h4>
              <S.CateringIcon />
              <a href="www.placeholder.com">Catering</a>
            </h4>
            <S.HR />
          </S.LinksList>
          <S.LinksList>
            <h4>
              <S.ContactIcon />
              <a href="www.placeholder.com">Contact</a>
            </h4>
            <S.HR />
          </S.LinksList>
        </S.NavLinks>
      </S.NavSection>
      <S.HoursPhone>
        <S.HoursPhoneList>
          <S.HoursIcon />
          <span className="hrs_contact_label">Opening Hours: </span>
          <span className="hrs_contact_number">11:00 - 11:00 pm</span>
        </S.HoursPhoneList>
        <S.HoursPhoneList>
          <S.PhoneIcon />
          <span className="hrs_contact_label">Contact: </span>
          <span className="hrs_contact_number">+1(832)000-0000</span>
        </S.HoursPhoneList>
      </S.HoursPhone>
      <S.HeaderImgContainer>
        <S.ImgGradient />
        <S.ImgText>
          There Are <span className="txt_gold">1000</span> Reasons
          <br />
          <span className="txt_sub">Why You Should Visit Us.</span>
        </S.ImgText>
        <S.HeaderButton>Reserve A Table</S.HeaderButton>
        <S.ImgMain src={S.imgHeaderMain} />
        <S.ImgFrame />
        <S.ImgMini src={S.imgHeaderMini} />
      </S.HeaderImgContainer>
    </S.HeaderContainer>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './headerPartialStyles';

const HeaderPartial = () => {
  return (
    <S.HeaderContainer>
      <Link to='/' className='logo_link' />
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
    </S.HeaderContainer>
  )
};

export default HeaderPartial;
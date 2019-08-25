import React from 'react';
import { ButtonReserve } from '../../elements/Button';
import * as S from './contactStyles';

const Contact = () => {
  return (
    <S.Wrapper className="wrapper">
      <S.MapBackground className="map-background" />
      <S.Content>
        <S.Frame />
        <S.TitleContact>
          <h3>Contact</h3>
          <S.Squiggly>
            <S.SquigglyLine className="line1 lineSize" />
            <S.SquigglyLine className="line2 lineSize" />
          </S.Squiggly>
        </S.TitleContact>
        <S.Info>
          <S.Address>1 / 2 Oxford Street, London</S.Address>
          <S.AddressIcon>
            {/* to style svg, go to svg file; unable to find better approach */}
            <object data={S.addressIcon} type='image/svg+xml'>
              <img alt='address icon' />
            </object>
            <p>Address</p>
          </S.AddressIcon>
          <S.Phone><a href="tel: 1(832) 000 - 0000">832.000.0000</a></S.Phone>
          <S.PhoneIcon>
            <object data={S.phoneIcon} type='image/svg+xml'>
              <img alt='phone icon' />
            </object>
            <p>Phone number</p>
          </S.PhoneIcon>
          <S.Email>booking@grillmaster.com</S.Email>
          <S.EmailIcon>
            <object data={S.emailIcon} type='image/svg+xml'>
              <img alt='email icon' />
            </object>
            <p>Email address</p>
          </S.EmailIcon>
        </S.Info>
        <S.ButtonContact><ButtonReserve /></S.ButtonContact>
      </S.Content>
    </S.Wrapper>
  );
};

export default Contact;

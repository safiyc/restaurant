import React from 'react';
import styled from 'styled-components';

import Title from '../../elements/Title';

import * as S from './contactStyles';

const Contact = () => {
  return (
    <S.Wrapper className="wrapper">
      <S.MapBackground className="map-background" />
      <S.Content>
        <Title title="contact" />
        <S.Address>1 / 2 Oxford Street, London</S.Address>

        <S.Phone>
          <svg>
            <use xlinkHref="../../asset/SVG-icon/phone.svg" />
          </svg>
          <a href="tel: 1(832) 000 - 0000">832.000.0000</a>
        </S.Phone>
        <S.Email>
          <svg>
            <use xlinkHref="../../asset/SVG-icon/mail.svg" />
          </svg>
        </S.Email>
      </S.Content>
    </S.Wrapper>
  );
};

export default Contact;

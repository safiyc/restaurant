import React from 'react';
import * as S from './emailFormStyles';

export default function EmailForm() {
  return (
    <S.form>
      <S.FontAwesomeIcon icon={S.faEnvelope} /><S.input id="emailAddress" type="email" placeholder='Email address' />
      <S.button>sign up</S.button>
    </S.form>
  );
}

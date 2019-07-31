import React from 'react';
import * as S from './emailFormStyles';

export default function EmailForm() {
  return (
    <form>
      <input id="emailAddress" type="email" placeholder="Email Address" />
      <S.button>sign up</S.button>
    </form>
  );
}

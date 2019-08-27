import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from './reserveFormStyles';

export default props => {
  const { partySize, partyName, startDate, handleChange, handleSubmit } = props;
  return (
    <S.Wrapper>
      <h3>Reservation</h3>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup className='form-group'>
          <label htmlFor='partySize'>Party Size:</label>
          <input
            name="partySize"
            value={partySize}
            type='number'
            onChange={handleChange}
            id='partySize'
          />
        </S.FormGroup>
        <S.FormGroup className='form-group'>
          <label htmlFor='partyName'>Party Name:</label>
          <input
            name="partyName"
            value={partyName}
            type='text'
            onChange={handleChange}
            id='partyName'
          />
        </S.FormGroup>
        <S.FormGroup className='form-group'>
          <label>Start Date:</label>
          <DatePicker
            name={startDate}
            selected={startDate}
          />
        </S.FormGroup>
        <S.FormGroupBtn className='form-group'>
          <S.ButtonReserve type='submit'>Reserve your table</S.ButtonReserve>
        </S.FormGroupBtn>
      </S.Form>
    </S.Wrapper>
  )
}
import React, { Component } from 'react';
// import axios from 'axios';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, getDay } from 'date-fns';
import * as S from './reserveFormStyles';

// const URL = 'http://localhost:3050/api/reservations';

export default class ReserveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyName: '',
      partySize: '',
      startDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangeDate(event) {
    this.setState({
      startDate: event
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.partyName + " " + this.state.partySize + " " + this.state.startDate);
  }

  render() {
    const { partySize, partyName, startDate } = this.state;
    const isDays = date => {
      const day = getDay(date);
      return day !== 1 && day !== 2 && day !== 3 && day !== 4;
    };
    return (
      <S.Wrapper>
        <h3>Make A Reservation</h3>
        <S.Form onSubmit={this.handleSubmit}>
          <S.FormGroup className='form-group'>
            <label htmlFor='name'>Party Name:</label>
            <input
              type='text'
              value={partyName}
              onChange={this.handleChange}
              name='partyName'
              id='name'
            />
          </S.FormGroup>
          <S.FormGroup className='form-group'>
            <label htmlFor='size'>Party Size:</label>
            <input
              type='number'
              min='1'
              max='4'
              placeholder='max 4 people'
              value={partySize}
              onChange={this.handleChange}
              name='partySize'
              id='size'
            />
          </S.FormGroup>
          <S.FormGroup className='form-group'>
            <label htmlFor='date'>Date:</label>
            <DatePicker
              name='startDate'
              selected={startDate}
              onChange={this.handleChangeDate}
              showTimeSelect
              dateFormat="MMMM d, yyyy - h aa"
              timeFormat='h aa'
              filterDate={isDays}
              minTime={setHours(new Date(), 16)}
              maxTime={setHours(new Date(), 20)}
              timeIntervals={60}
              placeholderText='select a date and time'
              id='date'
              autoComplete='off'
            />
          </S.FormGroup>
          <S.BtnContainer>
            <S.ButtonReserve type='submit'>Reserve Your Table</S.ButtonReserve>
          </S.BtnContainer>
        </S.Form>
        <hr />
        <h3>Reservation Dates</h3>
        <ul>
          <li>
            <span>date</span> | < span>party name</span> | <span>party size</span>
          </li>
          <li>
            <span>date</span> |< span>party name</span> | <span>party size</span>
          </li>
        </ul>
      </S.Wrapper>
    )
  }
}

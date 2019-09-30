import React, { Component } from 'react';
// import axios from 'axios';

// import ReserveForm from './ReserveForm';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import HeaderPartial from '../HeaderPartial';
// import Footer from '../Footer';
import * as S from './reserveFormStyles';

// const URL = 'http://localhost:3050/api/reservations';

export default class TestReserves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyName: '',
      partySize: '',
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // [event.target.name]: event.target.value
    // partyName: event.target.value,
    // partySize: event.target.value,
    // startDate: event
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
    const { partyName, partySize, startDate } = this.state;
    return (
      <div>
        <HeaderPartial />
        <S.Form onSubmit={this.handleSubmit}>
          <S.FormGroup className='form-group'>
            <label htmlFor='name'>Party Name:</label>
            <input
              type='text'
              value={partyName}
              onChange={this.handleChange}
              name='partyName'
              id='name' />
          </S.FormGroup>
          <S.FormGroup className='form-group'>
            <label htmlFor='size'>Party Size:</label>
            <input
              type='number'
              value={partySize}
              onChange={this.handleChange}
              name='partySize'
              id='size' />
          </S.FormGroup>
          <S.FormGroup className='form-group'>
            <label htmlFor='date'>Reservation Date:</label>
            <DatePicker
              name='startDate'
              selected={startDate}
              onChange={this.handleChangeDate}
              id='date'
            />
          </S.FormGroup>
          <input type='submit' value='Submit' />
        </S.Form>
      </div >
    )
  }
}
import React, { Component } from 'react';
import axios from 'axios';

import ReserveForm from './ReserveForm';
import HeaderPartial from '../HeaderPartial';
import Footer from '../Footer';

const URL = 'http://localhost:3050/api/reservations';

export default class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: '',
      partyName: '',
      // startDate: new Date()
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    // this is a way to do it.
    // this.setState(prevState => ({
    //     ...prevState,
    //     partySize: e.target.value,
    //     name: e.target.value,
    //     startDate: e.target.value
    // }))
  }

  // handleAdd = () => {
  //     const { partySize, name } = this.state;
  //     axios.post(URL, { partySize, name})
  //         .then(resp => console.log('funcionou'));

  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.state: ', this.state);
    const { partySize, name } = this.state;
    axios.post(URL, { partySize, name })
      .then(res => res.data);
  }




  render() {
    const { partySize, partyName } = this.state;
    return (
      <div>
        <HeaderPartial />
        <ReserveForm
          partySize={partySize}
          name={partyName}
          // startDate={startDate}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* <ReserverButton /> */}
        <Footer />
      </div>
    )
  }
}
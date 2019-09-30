import React, { Component } from 'react';

import HeaderPartial from '../HeaderPartial';
import Footer from '../Footer';
import ReserveForm from './ReserveForm';

// const Reserve = () => {
class Reserve extends Component {
  // load at top of reserve page when clicked on reserve btn link
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeaderPartial />
        <ReserveForm />
        <Footer />
      </>
    )
  }
}

export default Reserve;
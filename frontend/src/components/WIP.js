import React, { Component } from 'react';

import HeaderPartial from './HeaderPartial';

class WIP extends Component {
  // load at top of page when clicked on reserve btn link
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <HeaderPartial />
        <div style={{ fontSize: '4rem', fontWeight: '600', color: 'red', textAlign: 'center', marginTop: '80px' }}>Page is under construction.<br /><span style={{ fontSize: '3rem', color: 'black' }}>Please visit at another time.</span></div>
      </>
    )
  }
}

export default WIP;
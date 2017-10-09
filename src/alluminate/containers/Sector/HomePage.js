import React, { Component } from 'react';
import Header from './../Header/Header';

// const style = require('./Dashboard.scss');
export default class Sector extends Component {
  const style = require('./HomePage.scss');
  render() {
    return (
      // <div>
        {/* <Header/> */}
        <MarketCap/>
      {/* </div> */}
    );
  }
}


class MarketCap extends Component {
  render() {
    return (
      <div className="container">
        <h1 className={style.sectorTitle}>MarketCap (Sector)</h1>
        <span className={style.message}>% change in the last 24 hrs</span>
      </div>
    );
  }
}

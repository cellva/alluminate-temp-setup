import React, { Component } from 'react';

const style = require('./Ticker.scss');

export default class Ticker extends Component {

  render() {
    function populateTickers(coins) {
      return coins.map((coin)=>
        <div className={style.ticker}>
          <span className={style.separater}></span>
          <span>
            <img src={coin.url}/>
            <span className={style.coin}>{coin.symbol}</span>
            <span className={style.value}>{coin.value}</span>
            <span className={style.growth + (coin .indicator === 'plus' ? ' positive' : ' negative')}>#</span>
            <span className={style.percentage + (coin .indicator === 'plus' ? ' positive' : ' negative')}>{coin.percentage}%</span>
          </span>
        </div>
      );
    }

    const currency = [{
      'url': 'bitcoin.png',
      'value': '$234,34,6596',
      'percentage': 34.87,
      'indicator': 'plus',
      'symbol': 'BIT'
    },
      {
        'url': 'titcoin.jpg',
        'value': '$234,14,6226',
        'percentage': 1.387,
        'indicator': 'minus',
        'symbol': 'POP'
      },
      {
        'url': 'peercoin.png',
        'value': '$58,34,6546',
        'percentage': 2.87,
        'indicator': 'plus',
        'symbol': 'TIT'
      },
      {
        'url': 'mastercoin.jpg',
        'value': '$333,34,6546',
        'percentage': 4.87,
        'indicator': 'minus',
        'symbol': 'BIT'
      },
      {
        'url': 'monero.png',
        'value': '$64,34,6546',
        'percentage': 6.87,
        'indicator': 'plus',
        'symbol': 'MAS'
      },
      {
        'url': 'litecoin.jpg',
        'value': '$234,24,2246',
        'percentage': 1.27,
        'indicator': 'minus',
        'symbol': 'BIT'
      },
      {
        'url': 'coinye.jpg',
        'value': '$124,14,6146',
        'percentage': 1.17,
        'indicator': 'plus',
        'symbol': 'BIT'
      }];

    return (
      <marquee className={style.tickerContainer}>
        {populateTickers(currency)}
      </marquee>
    );
  }
}

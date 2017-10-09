import React, { Component } from 'react';
import Header from './../Header/Header';
import NewsFeed from './../NewsFeed/NewsFeed';
import Ticker from './../Ticker/Ticker';

const style = require('./HomePage.scss');
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <MobileHeader/> */}
        <MarketCap/>
        <NewsFeed/>
        <Ticker/>
      </div>
    );
  }
}

class MarketCap extends Component {
  render() {
    return (
      <div className={`${style.sectorContainer} container`}>
        <div className={style.sectorDescriptionContainer}>
          <div className={style.description}>
            <h1 className={style.sectorTitle}>Market Cap (Sector)</h1>
            <span className={style.message}>% change in the last 24 hrs</span>
          </div>
          <div className={style.sort}>
            <span className={style.label}> Sort by</span>
          </div>
        </div>
        <SubSectorContiner/>
      </div>
    );
  }
}


class SubSectorContiner extends Component {
  render() {
    const data = [{
      'label': 'Finance',
      'value': '$68,747,266,800',
      'indicator': 'plus',
      'growthValue': '1.98',
      'url': 'bitcoin.png'
    }, {
      'label': 'Social Impact',
      'value': '$27,505,458,494',
      'indicator': 'plus',
      'growthValue': '3.78',
      'url': 'mastercoin.jpg'
    }, {
      'label': 'Real Estate',
      'value': '$68,747,266,800',
      'indicator': 'plus',
      'growthValue': '1.58',
      'url': 'titcoin.jpg'
    }, {
      'label': 'Logistics',
      'value': '$68,747,266,800',
      'indicator': 'plus',
      'growthValue': '0.78',
      'url': 'monero.png'
    }, {
      'label': 'Gaming',
      'value': '$68,747,266,800',
      'indicator': 'plus',
      'growthValue': '6.78',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Data Services',
      'value': '$68,596,266,400',
      'indicator': 'plus',
      'growthValue': '10.78',
      'url': 'peercoin.png'
    }, {
      'label': 'Events & Entertainment',
      'value': '$68,516,266,500',
      'indicator': 'plus',
      'growthValue': '11.78',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Healthcare',
      'value': '$68,747,266,600',
      'indicator': 'plus',
      'growthValue': '1.98',
      'url': 'monero.png'
    }, {
      'label': 'Currencies',
      'value': '$12,747,266,700',
      'indicator': 'minus',
      'growthValue': '1.28',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Identity',
      'value': '$61,873,266,800',
      'indicator': 'plus',
      'growthValue': '1.73',
      'url': 'monero.png'
    }, {
      'label': 'Energy & Utilities',
      'value': '$18,776,266,800',
      'indicator': 'plus',
      'growthValue': '1.71',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Commodities',
      'value': '$22,234,266,800',
      'indicator': 'minus',
      'growthValue': '1.15',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Human Resources',
      'value': '$99,777,266,800',
      'indicator': 'plus',
      'growthValue': '1.19',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Digital Rights',
      'value': '$28,343,266,800',
      'indicator': 'minus',
      'growthValue': '1.86',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Computing',
      'value': '$6,127,963,800',
      'indicator': 'plus',
      'growthValue': '1.46',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Hardware',
      'value': '$68,234,856,800',
      'indicator': 'plus',
      'growthValue': '1.80',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Illicit Activities',
      'value': '$21,442,266,800',
      'indicator': 'plus',
      'growthValue': '1.90',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Technology',
      'value': '$10,747,266,800',
      'indicator': 'minus',
      'growthValue': '1.45',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Blockchain Protocol',
      'value': '$11,747,385,800',
      'indicator': 'minus',
      'growthValue': '1.96',
      'url': 'litecoin.jpg'
    }, {
      'label': 'Finance',
      'value': '$73,717,866,100',
      'indicator': 'plus',
      'growthValue': '1.45',
      'url': 'litecoin.jpg'
    }];

    function populateCoinsLayout(coins) {
      const currency = coins.length > 6 ? coins.slice(0, 6) : coins;
      return currency.map((coin)=>
        <div className={style.logoWrapper}>
          <img src={coin.url}/>
        </div>
      );
    }

    function populateSubSectorLayout(subSectors) {
      return subSectors.map((subSector)=>
        <div className={'sectorCards'}>
          <div className={style.card}>
            <div className={style.cardDetail}>
              <div className={style.label}>
                <p>{subSector.label}</p>
              </div>
              <div className={style.value}>
                <p>{subSector.value}</p>
              </div>
              <div className={style.growth + (subSector.indicator === 'plus' ? ' positive' : ' negative')}>
                <span className={style.indicator}>#</span>
                <span>{subSector.growthValue}%</span>
              </div>
              <div className={style.coinsContainer}>
                {populateCoinsLayout(data)}
                {data.length - 6 > 0 &&
                  <span className={style.remainingCoins}>
                    + { data.length - 6 } more
                  </span>
                }
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`${style.subSectorContainer} col-md-12 col-xs-12`}>
        {populateSubSectorLayout(data)}
      </div>
    );
  }
}

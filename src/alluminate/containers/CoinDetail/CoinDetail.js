import React, { Component } from 'react';
import Header from './../Header/Header';
import Ticker from './../Ticker/Ticker';
import { Row, Col } from 'react-bootstrap/lib';

const style = require('./CoinDetail.scss');

export default class CoinDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={`${style.coinContainer} container`}>
          <CoinScore />
          <PriceTrend />
          <SentimentGroup />
          <GoogleSearchTrends />
          <ExploreMore />
        </div>
        <Ticker />
      </div>
    );
  }
}

class CoinScore extends Component {
  render() {
    return (
      <Row>
        <Col md={12} xs={12} className={style.prodTypeHdr}>
          <Col md={4} xs={4} className={style.prodTypeTitle}>
            <img src="monero.png" alt="" />
            <h2>Monero</h2>
            <h5>XMR</h5>
          </Col>
          <Col md={2} xs={2} className={style.prodTypeValue}>
            <h1>$113.94</h1>
            <h2>(1.44%)</h2>
          </Col>
          <Col md={2} xs={2} className={style.prodTypeDetails}>
            <h6>Market Cap</h6>
            <span>$1,717,251,035</span>
          </Col>
          <Col md={2} xs={2} className={style.prodTypeDetails}>
            <h6>Volume (24h)</h6>
            <span>$28,014,300</span>
          </Col>
          <Col md={2} xs={2} className={style.prodTypeDetails}>
            <h6>Circulating Supply</h6>
            <span>15,070,877 XMR</span>
          </Col>
        </Col>
        <Col md={12} xs={12} className={style.prodTypeDescMain}>
          <Col md={4} xs={4} className={style.prodTypeDesc}>
            <p>Monero (XMR) is a cryptonight algorithm based alternative crypto currency.
              The coin is based on Proof of Work and has a block reward that varies smoothly.
              The difficulty retargets every block with a sixty second block target.</p>

            <p>Monero uses a Ring Signature system to protect your privacy,
               allowing users to make untraceable transactions.</p>
          </Col>
          <Col md={6} xs={6} className={style.overallDescMain}>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Coin Score</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
              <h6>Legal Compliance</h6>
            </div>
            <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
              <h6>Capital Risk</h6>
            </div>
            <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
              <h6>Operational Risk</h6>
            </div>
            <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Investment Potential</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Privacy Strength</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Token Concentration</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Team Quality</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Utility</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Liquidity</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Network Effect Indicator</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Buzz Indicator</h6>
              </div>
              <p>24/100</p>
            </div>
            <div className={style.overallDesc}>
              <div className={style.overallDescHdr}>
                <h6>Whitepaper Quality</h6>
              </div>
              <p>24/100</p>
            </div>
          </Col>
          <Col md={2} xs={2} className={style.overallRatingMain}>
            <div className={style.overallRating}>
              <div className={style.overallRatingHdr}>
                <h6>Overall rating</h6>
              </div>
              <p>88/100</p>
            </div>
          </Col>
        </Col>
      </Row>
    );
  }

}

class PriceTrend extends Component {
  render() {
    return (
      <Row>
        <Col md={12} xs={12} className={style.priceSec}>
          <Col md={6} xs={6} className={style.priceTrend}>
            <h2>Price Trend</h2>
            <Col md={12} xs={12} className={style.priceTrendTrack}>
              <img src="price-trend.png" alt="" />
            </Col>
          </Col>
          <Col md={6} xs={6} className={style.priceExchange}>
          <h2>Exchanges</h2>
          <div className={style.exchangeTable}>
            <table
              className={`${style.tableBordered} ${style.tableStriped} ${style.tableInverse}
                table table-striped table-inverse table-bordered`}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Volume</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$7,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$1,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$7,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$7,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$7,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$7,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
                <tr>
                  <td><img src="bitcoin_table.png" alt="" /> Bitcoin</td>
                  <td className="text-center">$7,928.23</td>
                  <td className="text-center">$4,567,928.23</td>
                </tr>
              </tbody>
            </table>
          </div>
          </Col>
        </Col>
      </Row>

    );
  }
}

class SentimentGroup extends Component {
  render() {
    return (
      <Row>
        <Col md={12} sm={12} className={style.sentimentGroup}>
        <h2>Sentiment Group</h2>
          <div className={style.graphSec}>
            <img src="sentiment.png" alt="" />
          </div>
        </Col>
      </Row>
    );
  }
}

class GoogleSearchTrends extends Component {
  render() {
    return (
      <Row>
        <Col md={12} sm={12} className={style.sentimentGroup}>
        <h2>Google Search Trends</h2>
          <div className={style.graphSec}>
            <img src="google-search.png" alt="" />
          </div>
        </Col>
      </Row>
    );
  }
}

class ExploreMore extends Component {
  render() {
    return (
      <Row className={style.exploreRow}>
        <Col md={12} sm={12} className={style.exploreSec}>
          <Col md={12} sm={12} className={`${style.exploreMoreHdr} text-center`}>
            <h4>Explore more on</h4>
          </Col>
        </Col>
        <Col md={12} sm={12} className={style.socialSec}>
          <div className={style.socialsSecMain}>
            <img src="reddit.png" alt="" />
            <div>
              <span>Reddit</span>
            </div>
          </div>
          <div className={style.socialsSecMain}>
            <img src="twitter.png" alt="" />
            <div>
              <span>Twitter</span>
            </div>
          </div>
          <div className={style.socialsSecMain}>
            <img src="slack.png" alt="" />
            <div>
              <span>Slack</span>
            </div>
          </div>
          <div className={style.socialsSecMain}>
            <img src="telegram.png" alt="" />
            <div>
              <span>Telegram</span>
            </div>
          </div>
          <div className={style.socialsSecMain}>
            <img src="go.png" alt="" />
            <div>
              <span>Go</span>
            </div>
          </div>
          <div className={style.socialsSecMain}>
            <img src="block-explorer.png" alt="" />
            <div>
              <span>BlockExplorer</span>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

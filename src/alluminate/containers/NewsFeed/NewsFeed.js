import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib';
const style = require('./NewsFeed.scss');
export default class NewsFeed extends Component {
  render() {
    const data = [
      {
        'content': 'China Ban on ICO is Temporary, Licensing to be Introduced: Official',
        'time': '15 hours ago'
      },
      {
        'content': 'China Ban on ICO is Temporary, Licensing to be Introduced: Official',
        'time': '15 hours ago'
      },
      {
        'content': 'Ripe for the Plucking: Real Estate and Blockchain Technology',
        'time': 'Sep 08, 2017'
      },
      {
        'content': 'Welcome to Canada, Bitcoin: Regulators Approve First Bitcoin Fund Manager',
        'time': 'Sep 08, 2017'
      },
      {
        'content': 'Crypto Valley Association Pens ICO Code of Conduct for Switzerland',
        'time': 'Sep 08, 2017'
      },
      {
        'content': 'China Ban on ICO is Temporary, Licensing to be Introduced: Official',
        'time': '15 hours ago'
      },
      {
        'content': 'China Ban on ICO is Temporary, Licensing to be Introduced: Official',
        'time': '15 hours ago'
      },
      {
        'content': 'Ripe for the Plucking: Real Estate and Blockchain Technology',
        'time': 'Sep 08, 2017'
      },
      {
        'content': 'Welcome to Canada, Bitcoin: Regulators Approve First Bitcoin Fund Manager',
        'time': 'Sep 08, 2017'
      },
      {
        'content': 'Crypto Valley Association Pens ICO Code of Conduct for Switzerland',
        'time': 'Sep 08, 2017'
      }
    ];

    function populateNewsFeeds(feeds) {
      return feeds.map((feed)=>
      <Col md={6} sm={6} sm={12}>
        <div className={style.feed}>
          <a href="#">{feed.content}</a>
          <span>{feed.time}</span>
        </div>
      </Col>
      );
    }
    return (
      <div className={style.newsFeedContainer}>
        <Grid>
          <Row className={style.header}>
            <Col md={6} sm={6} xs={6} className={style.colHeader}>
              <h1 className={style.title}>
                Latest News
              </h1>
            </Col>
            <Col md={6} sm={6} xs={6} className={style.colHeader}>
              <div className={style.moreNews}>
                <span className={style.label}>
                  More News
                </span>
              </div>
            </Col>
          </Row>
          <hr/>
          <Row className={style.feedContainer}>
            {populateNewsFeeds(data)}
          </Row>
        </Grid>
      </div>
    );
  }
}

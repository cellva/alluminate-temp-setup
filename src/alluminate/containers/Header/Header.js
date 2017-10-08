import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const style = require('./Header.scss');

export default class Header extends Component {
  render() {
    return (
      <div className={style.headerContainer}>
        <a href="#">
          <img className={style.logo + ' hidden-xs'} src="logo.png" width="150" alt=""/>
          <img className={style.logoXs + ' visible-xs'} src="logo.png" width="150" alt=""/>
        </a>
        <VerticalDivider/>
        <div className="hidden-xs">
          <LinkContainer to="/portfolio">
            <div className={style.link}>My Portfolio</div>
          </LinkContainer>
        </div>
        <VerticalDivider/>
        <CustomMenu/>
        <VerticalDivider/>
        <CustomSearch className={style.link}/>
        <div className={style.userProfile}>
          <VerticalDivider/>
          <a href="#">
            <img src="default-user.png" width="40" alt="" />
            <span className="hidden-xs">John</span>
          </a>
          {/* Show the portfolio link and user name in the user profile menu for xs device. */}
          {/* <LinkContainer className="visible-xs" to="/portfolio">
            <div className={style.link}>My Portfolio</div>
          </LinkContainer> */}
        </div>
      </div>
    );
  }
}

class VerticalDivider extends Component {
  render() {
    return (
      <div className={style.verticalDivider}></div>
    );
  }
}

class CustomMenu extends Component {
  render() {
    return (
      <div className={style.link}>
        Sector <i className={style.arrow + ' fa fa-angle-down'} aria-hidden="true"></i>
        {/* <CustomMenu/> */}
      </div>
    );
  }
}

class CustomSearch extends Component {
  render() {
    return (
      <div className={style.search}>
        <form className="form-inline">
          <input type="text" placeholder="Search" />
          <button className={style.btn + ' btn hidden-xs hidden-sm'} type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    );
  }
}

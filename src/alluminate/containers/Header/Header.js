import React, { Component } from 'react';
const style = require('./Header.scss');

export default class Header extends Component {
  render() {
    return (
      <nav className={`${style.customNav} ${style.fixedTop} navbar`}>
        <div className="navbar-header">
          <button type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className={style.navbarBrand} href="#">
            <img className={style.logo + ' hidden-xs'} src="logo.png" width="150" alt="Logo"/>
            <img className={style.logoXs + ' visible-xs'} src="logo.png" width="150" alt="Logo"/>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className={`${style.myNavbar} navbar-nav`}>
            <li className="nav-item">
              <a href="#">My Portfolio</a>
            </li>
            <li className={`${style.custoNavItem} nav-item dropdown`}>
              <a href="#" id="dropdown01"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Sectors <i className="fa fa-angle-down" aria-hidden="true" />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <a className="dropdown-item" href="#">currency</a>
                <a className="dropdown-item" href="#">currency</a>
                <a className="dropdown-item" href="#">currency</a>
              </div>
            </li>
            <li className={`${style.searchHeader} nav-item`}>
              <form className="form-inline my-2 my-lg-0">
                <input type="text" placeholder="Search for an ICO" aria-label="Search" />
                <button className="btn my-2 my-sm-0" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </li>
          </ul>
          <div className={style.userLogout}>
            <a href="#">
              <img src="default-user.png" width="40" alt="" />
              <span>John</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

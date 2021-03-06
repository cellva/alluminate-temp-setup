import React from 'react';
import {IndexRoute, Route} from 'react-router';
// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
  Dashboard,
  // Coin,
  HomePage,
  CoinDetail,
  Empty
  } from 'alluminate/containers';

export default () => {
  // const requireLogin = (nextState, replace, cb) => {
  //   function checkAuth() {
  //     const { auth: { user }} = store.getState();
  //     if (!user) {
  //       // oops, not logged in, so can't be here!
  //       replace('/');
  //     }
  //     cb();
  //   }
  //
  //   if (!isAuthLoaded(store.getState())) {
  //     store.dispatch(loadAuth()).then(checkAuth);
  //   } else {
  //     checkAuth();
  //   }
  // };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={Empty}>
      { /* Home (main) route */ }
      <IndexRoute component={Empty}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/coindetail" component={CoinDetail}/>
      {/* <Route path="/coin" component={Coin}/> */}
      {/* <Route path="/sector" component={Sector}/> */}
    </Route>
  );
};

/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import { watchItemData } from '../../redux/app-redux';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import LandingItems from '../LandingItems/LandingItems';

const mapStateToProps = (state) => {
  return {
    itemData: state.itemData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    watchItemData: () => { dispatch(watchItemData()); },
  };
};

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />

        <Route path={ROUTES.LANDING_ITEMS} component={id => <LandingItems item={id} />} />
      </Switch>
    </div>
  </Router>
);

export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(App));

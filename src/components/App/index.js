import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withAuthentication } from '../Session';
import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import Theme from './Theme';
import * as ROUTES from '../../constants/routes';

const App = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </main>
      <AppDrawer />
    </div>
  </Router>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default compose(
  withAuthentication,
  withStyles(Theme),
)(App);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SignUpForm from './SignUpForm';
import SignInLink from '../SignIn/SignInLink';
import Theme from './Theme';

const SignUp = ({ classes }) => (
  <div className={classes.container}>
    <SignUpForm />
    <SignInLink />
  </div>
);

SignUp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(Theme)(SignUp);

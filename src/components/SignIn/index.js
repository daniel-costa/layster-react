import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SignInForm from './SignInForm';
import SignUpLink from '../SignUp/SignUpLink';
import PasswordForgetLink from '../PasswordForget/PasswordForgetLink';
import Theme from './Theme';

const SignIn = ({ classes }) => (
  <div className={classes.container}>
    <SignInForm />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

SignIn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(Theme)(SignIn);

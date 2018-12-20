import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import PasswordForgetForm from './PasswordForgetForm';
import SignInLink from '../SignIn/SignInLink';
import Theme from './Theme';

const PasswordForget = ({ classes }) => (
  <div className={classes.container}>
    <PasswordForgetForm />
    <SignInLink />
  </div>
);

PasswordForget.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(Theme)(PasswordForget);

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

SignOutButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  firebase: PropTypes.object.isRequired,
};

export default withFirebase(SignOutButton);

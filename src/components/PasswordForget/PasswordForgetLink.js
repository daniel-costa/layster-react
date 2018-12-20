import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const PasswordForgetLink = () => (
  <p>
    Forgot your password?
    <Button component={Link} to={ROUTES.PASSWORD_FORGET} color="primary">
      Redefine password
    </Button>
  </p>
);

export default PasswordForgetLink;

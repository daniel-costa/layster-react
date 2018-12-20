import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const SignUpLink = () => (
  <p>
    Don&#39;t have an account?
    <Button component={Link} to={ROUTES.SIGN_UP} color="primary">
      Sign Up
    </Button>
  </p>
);

export default SignUpLink;

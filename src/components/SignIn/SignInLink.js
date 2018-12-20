import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const SignInLink = () => (
  <p>
    Already have an account?
    <Button component={Link} to={ROUTES.SIGN_IN} color="primary">
      Sign In
    </Button>
  </p>
);

export default SignInLink;

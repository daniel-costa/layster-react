import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import SignOutButton from '../SignOut/SignOutButton';
import * as ROUTES from '../../constants/routes';

const UserNavigation = () => (
  <>
    <Button color="inherit" component={Link} to={ROUTES.LANDING}>
      Landing
    </Button>
    <Button color="inherit" component={Link} to={ROUTES.HOME}>
      Home
    </Button>
    <Button color="inherit" component={Link} to={ROUTES.ACCOUNT}>
      Account
    </Button>
    <SignOutButton />
  </>
);

export default UserNavigation;

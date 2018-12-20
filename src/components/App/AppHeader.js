import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { AuthUserContext } from '../Session';
import UserNavigation from './UserNavigation';
import GuestNavigation from './GuestNavigation';
import Theme from './Theme';

const CustomAppHeader = ({ classes }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        <span role="img" aria-label="logo">
          🐹
        </span>
        <span>Layster</span>
      </Typography>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <UserNavigation /> : <GuestNavigation />)}
      </AuthUserContext.Consumer>
    </Toolbar>
  </AppBar>
);

CustomAppHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(Theme)(CustomAppHeader);

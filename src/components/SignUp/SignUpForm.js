import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Theme from './Theme';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;
    const { firebase, history } = this.props;

    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const {
      username, email, password, passwordConfirmation, error,
    } = this.state;

    const { classes } = this.props;
    const isInvalid = password !== passwordConfirmation || password === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Create account
            </Typography>
            <TextField
              id="username"
              value={username}
              label="Username"
              margin="normal"
              fullWidth
              onChange={this.onChange}
            />
            <TextField
              id="email"
              value={email}
              label="Email"
              margin="normal"
              fullWidth
              onChange={this.onChange}
            />
            <TextField
              id="password"
              value={password}
              label="Password"
              margin="normal"
              fullWidth
              onChange={this.onChange}
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="passwordConfirmation"
              value={passwordConfirmation}
              label="Password"
              margin="normal"
              fullWidth
              onChange={this.onChange}
              type="password"
              autoComplete="current-password"
            />
            {error && <p>{error.message}</p>}
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              disabled={isInvalid}
              type="submit"
              fullWidth
            >
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  firebase: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withFirebase,
  withStyles(Theme),
)(SignUpForm);

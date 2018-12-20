import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withFirebase } from '../Firebase';
import Theme from './Theme';

const INITIAL_STATE = {
  password: '',
  passwordConfirmation: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { password } = this.state;
    const { firebase } = this.props;

    firebase
      .doPasswordUpdate(password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { password, passwordConfirmation, error } = this.state;
    const { classes } = this.props;
    const isInvalid = password !== passwordConfirmation || password === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Change password
            </Typography>
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
              label="Password Confirmation"
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
              Change Password
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

PasswordChangeForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  firebase: PropTypes.object.isRequired,
};

export default compose(
  withFirebase,
  withStyles(Theme),
)(PasswordChangeForm);

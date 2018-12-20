import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import PasswordForgetForm from '../PasswordForget/PasswordForgetForm';
import PasswordChangeForm from '../PasswordChange/PasswordChangeForm';

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>
          Hi&#160;
          {authUser.email}
        </h1>
        <PasswordForgetForm />
        <br />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);

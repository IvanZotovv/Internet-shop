import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div type="button" onClick={firebase.doSignOut}>
    Sign_Out
  </div>
);

export default withFirebase(SignOutButton);

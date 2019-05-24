/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div type="button" onClick={firebase.doSignOut}>
    Sign_Out
  </div>
);

export default withFirebase(SignOutButton);

/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';

import styled from 'styled-components';
import { withAuthorization } from '../Session';

const ChekoutMainBlock = styled.div`
  width: 90%;
  margin: auto;
`;

const HomePage = () => (
  <ChekoutMainBlock>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </ChekoutMainBlock>
);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);

/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
`;

const AuthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-decoration: none;
  background: rgb(224, 221, 221);
  width: 90%;
  padding: 0;
`;
const AuthButtonItem = styled.li`
  background: transparent;
  border-radius: 3px;
  border: 2px solid grey;
  color: grey;
  margin: 1em 0.5em;
  padding: 0.7em 1.5em;
`;
const ShopHeader = styled.h2`
  width: 100%;
`;
const AuthSection = styled.div`
  justify-content: flex-end;
`;

const Navigation = () => (
  <HeaderSection>
    <AuthHeader>
      <ShopHeader>Shop-bycycle</ShopHeader>
      <AuthUserContext.Consumer>
        { authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />) }
      </AuthUserContext.Consumer>
    </AuthHeader>
  </HeaderSection>
);

const NavigationAuth = () => (
  <AuthSection>
    <AuthHeader>
      <AuthButtonItem>
        <Link style={{ textDecoration: 'none' }} to={ROUTES.LANDING}>Landing</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <Link style={{ textDecoration: 'none' }} to={ROUTES.HOME}>Home</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <Link style={{ textDecoration: 'none' }} to={ROUTES.ACCOUNT}>Account</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <Link style={{ textDecoration: 'none' }} to={ROUTES.ADMIN}>Admin</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <SignOutButton />
      </AuthButtonItem>
    </AuthHeader>
  </AuthSection>
);

const NavigationNonAuth = () => (
  <AuthHeader>
    <AuthButtonItem>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </AuthButtonItem>
    <AuthButtonItem>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </AuthButtonItem>
  </AuthHeader>
);

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

import styled from 'styled-components';


const AuthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  list-style: none;
  text-decoration: none;
  background: rgb(224, 221, 221);
`
const AuthButtonItem = styled.li`
  background: transparent;
  border-radius: 3px;
  border: 2px solid grey;
  color: grey;
  margin: 1em 0.5em;
  padding: 0.7em 1.5em;
`
const ShopHeader = styled.h2`
  padding-left: 5%;
  width: 100%;
`
const AuthSection = styled.div`
  justify-content: flex-end;
`

const Navigation = () => (
  <AuthHeader>
    <ShopHeader>Shop-bycycle</ShopHeader>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </AuthHeader>
);

const NavigationAuth = () => (
  <AuthSection>
    <AuthHeader>
      <AuthButtonItem>
        <Link style={{"textDecoration": "none"}}to={ROUTES.LANDING}>Landing</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <Link style={{"textDecoration": "none"}} to={ROUTES.HOME}>Home</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <Link style={{"textDecoration": "none"}} to={ROUTES.ACCOUNT}>Account</Link>
      </AuthButtonItem>
      <AuthButtonItem>
        <Link style={{"textDecoration": "none"}} to={ROUTES.ADMIN}>Admin</Link>
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

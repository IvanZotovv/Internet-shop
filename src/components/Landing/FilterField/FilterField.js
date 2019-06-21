/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import styled from 'styled-components';
import Basket from '../Basket/Basket';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  position: relative;
  z-index:56345;
  margin: auto;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;
const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

class AddItemToBasket extends Component {
  render() {
    return (
      <Container>
        <Title>Your bike</Title>
        <div>
          <Input type="email" placeholder="Choose your bike!"></Input>
          {/* <Span></Span> */}
        </div>
        <Basket />
      </Container>
    );
  }
}

export default AddItemToBasket;

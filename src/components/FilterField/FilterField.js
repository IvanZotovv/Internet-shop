/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import styled from 'styled-components';
import Basket from '../Basket/Basket';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 0;
`;
const InputField = styled.span`
& {
  position:relative;
  font-size: 1.5em;
  background: linear-gradient(21deg,  #454747, #c6c9c8);
  padding: 3px;
  display: inline-block;
  border-radius: 9999em;
  height: 40px;
};
*:not(span) {
  position: relative;
  display: inherit;
  border-radius: inherit;
  margin: 5px;
  height: 30px;
  width: 300px;
  border: none;
  outline: none;
  padding: 0 .325em;
  z-index: 1; 
  &:focus + span {
    opacity: 1;
    transform: scale(1);
  }
`;
const Span = styled.span`
  transform: scale(.993, .94); 
  transition: transform .5s, opacity .25s;
  opacity: 0; 
  position:absolute;
  z-index: 0; 
  margin:4px; 
  left:0;
  top:0;
  right:0;
  bottom:0;
  border-radius: inherit;
  pointer-events: none; 
  box-shadow: inset 0 0 0 3px #fff,
  0 0 0 4px #fff,
  3px -3px 30px #eaf5aa, 
  -3px 3px 30px #b7c254;
}
`;
const Input = styled.input`
  & {
    font-family: inherit;
    line-height:inherit;
    color:#2e3750;
    min-width:12em;
  }
  &::after {
    content:'';
    background: linear-gradient(21deg, #10abff, #1beabd);
    height:3px;
    width:100%;
    position:absolute;
    left:0;
    top:0;
  }
`;
const Title = styled.h1`
  padding: 0;
  margin: 0;
`

class AddItemToBasket extends Component {
  render() {
    return (
      <Container>
        <Title>fffff</Title>
        <InputField>
          <Input class="" type="email" placeholder="Choose your bike! Enjoy the ride"></Input>
          <Span></Span>
        </InputField>
        <Basket />
      </Container>
    );
  }
}

export default AddItemToBasket;

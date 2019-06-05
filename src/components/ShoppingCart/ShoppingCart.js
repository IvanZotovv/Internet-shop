import React from 'react';
import styled from 'styled-components';

const CartItemBlock = styled.div`
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const FormBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  
`;
const Page = styled.p`
  align-items: flex-end;
  padding: 0,
  margin: 0,
`;
const CartItemButton = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
  width: 90px;
`;
const InfoAbout = styled.div`
  height: 200px;
`;
const CartItemButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3px,
`;


export default function ShoppingCart() {
  return (
    <CartItemBlock>
      <InfoAbout>
        <h3>Shopping cart</h3>
        <p>Total price: </p>
      </InfoAbout>
      <FormBlock>
        <Page>Enter your address:</Page>
        <Page><input /></Page>
      </FormBlock>
      <CartItemButtonBlock>
        <CartItemButton>Clear basket</CartItemButton>
        <CartItemButton>Buy</CartItemButton>
      </CartItemButtonBlock>
    </CartItemBlock>
  );
}

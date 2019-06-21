import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


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
const CartItemButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: white
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  background: green

  &:hover {
    color: white;
    background-color: ${props =>
    (props.primary ? 'green' : 'white')};
  color: ${props => (props.primary ? 'white' : 'green')};
  border: ${props =>
    (props.primary ? '2px solid white' : '2px solid green')};
  }
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
const CartItemButtonClear = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    (props.primary ? '2px solid violet' : '2px solid palevioletred')};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
    background-color: ${props =>
    (props.primary ? 'violet' : 'palevioletred')};
  }
`;
const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // deleteItem: (item) => { dispatch(deleteCartFromData(item)); },
  };
};

class ShoppingCart extends Component {
  deleteAll() {

  }

  render() {
    const { basket } = this.props
    console.log(basket);
    return (
      <CartItemBlock>
        <InfoAbout>
          <h3>Shopping cart</h3>
          <p>
            Total price: $
            {' '}
            { basket.totalPrice }
          </p>
        </InfoAbout>
        <FormBlock>
          <Page>Enter your address:</Page>
          <Page><input /></Page>
        </FormBlock>
        <CartItemButtonBlock>
          <CartItemButtonClear onClick={this.deleteAll()}>Clear basket</CartItemButtonClear>
          <CartItemButton>Buy</CartItemButton>
        </CartItemButtonBlock>
      </CartItemBlock>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

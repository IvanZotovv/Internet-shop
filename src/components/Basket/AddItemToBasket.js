/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import styled from 'styled-components';
import Basket from './Basket';


const EditItemButton = styled.div`
  background: red;
  padding: 5px 10px;
`;

class AddItemToBasket extends Component {
  state = {
    isOpen: false,
  }


  showBasketBlock(item) {
    // console.log(item);
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { item } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <EditItemButton onClick={() => this.showBasketBlock(item)}>Add to Cart</EditItemButton>
        {!isOpen ? null : <Basket itemDescr={item} />}
      </div>
    );
  }
}

export default AddItemToBasket;

import React, { Component } from 'react';
import styled from 'styled-components';
import cart from '../../images/cart.png'

const IconField = styled.div`
  // line-height: 10px;
`;

class Basket extends Component {
  render() {
    return (
      <IconField>
        <img src={cart} alt="Logo" />
      </IconField>
    );
  };
}

export default Basket;

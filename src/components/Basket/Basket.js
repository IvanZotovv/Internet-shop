/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import cart from '../../images/cart.png';

const IconField = styled.div`
  position: relative;
`;
const CountNumber = styled.h3`
  position: absolute;
  left: -85%;
  top: -50%;
  height: 10px;
  width: 10px
  border-radius: 50%;
  padding: 15px;
  line-height: 10px;
  background: rgba(217, 61, 26, 0.8);
  z-index: 234;
`;
const mapStateToProps = (state) => {
  return {
    // itemData: state.itemData,
    setItemToData: state.setItemToData,
  };
};


class Basket extends Component {
  render() {
    const { setItemToData } = this.props;
    console.log(setItemToData);
    return (
      <IconField style={{padding: 0}}>
        <CountNumber>0</CountNumber>
        <img src={cart} alt="Logo" />
      </IconField>
    );
  }
}

export default connect(mapStateToProps)(Basket);

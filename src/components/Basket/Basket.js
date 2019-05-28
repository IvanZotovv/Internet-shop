/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import cart from '../../images/cart.png';
import ModalBlock from '../ModalBlock/ModalBlock';

const IconField = styled.div`
  position: relative;
  &:hover {
    opacity: .7;
  }  

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
const Image = styled.img`
  opacity: .9;
  cursor: pointer;
`;

const mapStateToProps = (state) => {
  return {
    setItemToData: state.setItemToData,
  };
};


const Basket = ({ setItemToData }) => {
  const count = setItemToData.length;
  return (
    <IconField style={{ padding: 0 }}>
      <CountNumber>{count}</CountNumber>
      <div onClick={() => <ModalBlock />}>
        <Image src={cart} alt="Logo" />
      </div>
    </IconField>
  );
};

export default connect(mapStateToProps)(Basket);

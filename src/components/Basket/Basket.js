
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../../images/cart.png';
import * as ROUTES from '../../constants/routes';

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
    basket: state.basket.totalCount,
  };
};


function Basket({ basket }) {
  return (
    <IconField style={{ padding: 0 }}>
      <CountNumber>{basket}</CountNumber>
      <Link to={ROUTES.BASKET}>
        <Image src={cart} alt="Logo" />
      </Link>
      {/* {isOpen ? <ModalBlock /> : null} */}
    </IconField>
  );
}

export default connect(mapStateToProps)(Basket);

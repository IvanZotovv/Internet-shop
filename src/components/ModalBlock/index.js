/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable import/named */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/app-redux';
import { basketReducer } from '../../redux/reducer/basketReducer';
// const _ = require('lodash');


const BlockList = styled.div`
  width: 90%;
  position: relative;
  margin: auto;
`;
const CartList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;
const CartItem = styled.li`
  width: 45%;
  border: 1px solid black;
  list-style: none;
  padding: 15px;
  margin: 5px 0;
`;
const Page = styled.p`
  padding: '0',
  margin: '0',
  width: 100px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;
const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Close = styled.h3`
  cursor: pointer;
  opacity: .7;
  &:hover {
    opacity: .4;
  }
`;
const mapStateToProps = (state) => {
  return {
    ItemToBasket: [
      ...{
        data: {
          basketReducer,
        },
        count: state.count,
      },
    ],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => { dispatch(deleteItem(item)); },
  };
};


class ModalBlock extends Component {
  constructor(props) {
    super(props);
    this.itemsArr = this.props.addToBasket;
    this.countItems();
  }

  countItems() {
    const itemsArray = this.itemsArr;
    console.log(itemsArray);
  }

  handleChange = item => () => {
    this.props.deleteItem(item);
  };

  render() {
    const { ItemToBasket, count } = this.props;

    // const count = ItemToBasket;
    console.log(count);
    const filter = ItemToBasket.map(e => e.id).map((e, i, final) => final.indexOf(e) === i && i).filter(e => ItemToBasket[e]).map(e => ItemToBasket[e]);

    const cartList = filter.map((i) => {
      return (
        <CartItem>
          <TitleBlock>
            <h3>{i.title}</h3>
            <p>{}</p>
            <Close onClick={this.handleChange(i)}>X</Close>
          </TitleBlock>
          <p>{i.price}</p>
          <p>{i.description}</p>
          <Page>
            <Image src={i.img} />
          </Page>
        </CartItem>
      );
    });

    return (
      <BlockList>
        <h1>Orders cart</h1>
        <CartList>
          { count.length === 0 ? <h4> Basket is empty </h4> : cartList }
        </CartList>
      </BlockList>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalBlock);

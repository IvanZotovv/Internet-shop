
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteCartFromData } from '../../redux/app-redux';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const ShoppingCartBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ShoppingCartSection = styled.div`
  width 30%;
  max-height: 350px;
  background: rgb(224, 221, 221);
`;
const BlockList = styled.div`
  width: 90%;
  position: relative;
  margin: auto;
`;
const CartList = styled.ul`
  width: 68%;
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
  margin-bottom: 5px;
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
    basket: state.basket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => { dispatch(deleteCartFromData(item)); },
  };
};


class ModalBlock extends Component {
  // constructor(props) {
  //   super(props);
  //   this.items = this.props.items;

  // }


  handleChange = item => () => {
    this.props.deleteItem(item);
  };


  render() {
    const { ...items } = this.props.basket;
    console.log(items);
    const element = Object.values(items.items);
    const cartList = element.map((i) => {
      return (
        <CartItem key={i.id}>
          <TitleBlock>
            <h3>{i.title}</h3>
            <p> x{i.count}</p>
            <Close onClick={this.handleChange(i)}>X</Close>
          </TitleBlock>
          <p>{i.description}</p>
          <Page>
            <Image src={i.img} />
          </Page>
          <p>{i.price}</p>
        </CartItem>
      );
    });

    return (
      <BlockList>
        <h1>Orders cart</h1>
        <ShoppingCartBlock>
          <CartList>
            {items.totalCount > 0 ? cartList : <h4> Basket is empty </h4>}
          </CartList>
          {items.totalCount > 0 ? (
            <ShoppingCartSection>
              <ShoppingCart />
            </ShoppingCartSection>
          ) : null }
        </ShoppingCartBlock>
      </BlockList>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalBlock);

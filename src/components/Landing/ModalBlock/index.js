
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import { deleteCartFromData } from '../../../redux/app-redux';

const BlockList = styled.div`
  width: 90%;
  position: relative;
  margin: auto;
`;

const CartItem = styled.li`
  width: 100%;
  border: 1px solid black;
  list-style: none;
  padding: 15px 0;
  margin-bottom: 5px;
`;
const ShoppingCartInfo = styled.div`
  width: 100%;
  padding: 6px 0;
  background: grey;
  // opacity: 0.5;
`;
const ShoppingCartButton = styled.div`
  background: red;
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 10px 0 10px;
  cursor: pointer;
  &:hover {
    width: 205px;
    height: 40px;
    background: rgb(112, 24, 24);
  }
`;
const ShoppingCartBlock = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
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
  handleChange = item => () => {
    this.props.deleteItem(item);
  };

  render() {
    const { ...items } = this.props.basket;
    const data = Object.values(items.items);
    const columns = [
      {
        title: 'Image',
        dataIndex: 'img',
        width: '20%',
        key: 'img',
        align: 'left',
        render: img => <img height={100} src={img} alt="" />,
      },
      {
        title: 'Title',
        dataIndex: 'title',
        width: '45%',
        padding: '20px',
        align: 'left',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        align: 'left',
        width: '140px',
      },
      {
        title: 'Count',
        key: 'count',
        dataIndex: 'count',
        width: '100px',
        align: 'left',
      },
      {
        title: 'Action',
        dataIndex: '',
        width: '140px',
        key: 'x',
        render: (key) => {
          return (
            <a href="#" onClick={this.handleChange(key)}>Delete</a>
          );
        },
      },
      {
        title: 'SubTotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
        width: '140px',
        align: 'left',
      },
    ];

    return (
      <BlockList>
        <h1>Orders cart</h1>
        {items.totalCount > 0
          ? (
            <div>
              <CartItem>
                <Table
                  columns={columns}
                  bordered
                  dataSource={data}
                  pagination={false}
                />
              </CartItem>
              <ShoppingCartInfo>
                <ShoppingCartBlock>
                  <h3>
                    Shopping Cart Total: $
                    {' '}
                    {items.totalPrice}
                  </h3>
                  <Link to={ROUTES.CHECKOUTBLOCK}>
                    <ShoppingCartButton>Checkout now</ShoppingCartButton>
                  </Link>
                </ShoppingCartBlock>
              </ShoppingCartInfo>
            </div>
          )
          : <h4> Basket is empty </h4> }
      </BlockList>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalBlock);

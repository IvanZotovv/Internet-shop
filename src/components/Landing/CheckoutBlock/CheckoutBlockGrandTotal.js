import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

function CheckoutBlockGrandTotal(props) {
  const { ...items } = props.basket;
  console.log(items);
  const data = Object.values(items.items);
  const columns = [
    {
      title: 'Image',
      dataIndex: 'img',
      padding: '10px',
      width: '12%',
      key: 'img',
      align: 'left',
      render: img => <img height={70} src={img} alt="" />,
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
      padding: '20px',
    },
    {
      title: 'Count',
      key: 'count',
      padding: '20px',
      dataIndex: 'count',
      width: '100px',
      align: 'left',
    },
    {
      title: 'SubTotal',
      dataIndex: 'subtotal',
      key: 'subtotal',
      width: '140px',
      align: 'left',
    },
  ];
  console.log(items);
  return (
    <div>
      <Table
        columns={columns}
        bordered
        dataSource={data}
        pagination={false}
      />
      <h3>
    Grand total:
        {' '}
        {items.totalPrice}
      </h3>

    </div>
  );
}

export default connect(mapStateToProps)(CheckoutBlockGrandTotal);

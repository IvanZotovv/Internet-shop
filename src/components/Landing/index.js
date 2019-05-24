/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import * as  firebase from 'firebase/app';
import 'firebase/database';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ShopItems from './ShopItems';
import { withFirebase } from '../Firebase';
import { watchItemData } from '../../redux/app-redux';
import AddItemToBasket from '../Basket/AddItemToBasket';
import FilterField from '../FilterField/FilterField';


const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
  margin: 5px;
  background: gray;
`;
const BlockList = styled.div`
  width: 90%;
  position: relative;
  margin: auto;
`;
const EditItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

const mapStateToProps = (state) => {
  return {
    itemData: state.itemData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    watchItemData: () => { dispatch(watchItemData()); },
  };
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.props.watchItemData();
  }

  render() {
    const { itemData } = this.props;
    const dataArray = Object.values(itemData);

    const li = dataArray.map((i) => {
      return (
        <Item key={i.id}>
          <Link to={`${i.id}`}>
            <ShopItems elem={i} />
          </Link>
          <EditItemBlock>
            <p>
              Price:
              {i.price}
            </p>
            <AddItemToBasket item={i} />
          </EditItemBlock>
        </Item>
      );
    });

    return (
      <BlockList>
        <FilterField />
        <List>
          {/* {loading && <div>Loading ...</div>} */}
          {li}
        </List>
      </BlockList>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Landing));

/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-expressions */

import React, { Component } from 'react';
import 'firebase/database';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ShopItems from './ShopItems';
import { withFirebase } from '../Firebase';
import { watchItemData, addCartData } from '../../redux/app-redux';
import FilterField from './FilterField/FilterField';
import TextInform from './TextInform/TextInform';


const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: -1px;
  width: 70%;
  height: 80vh;
  overflow-y: scroll;
  margin-right: -20px;
`;
const Item = styled.li`
  list-style: none;
  margin: 5px;
  background: white;
  z-index: 23;
  width: 45%;
`;
const BlockList = styled.div`
  position: relative;
  margin: auto;
`;
const EditItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;
const EditItemButton = styled.div`
  background: red;
  padding: 5px 10px;
  cursor: pointer;
`;
const MainContainer = styled.section`
  width: 90%;
  height: 100vh;
  margin: auto;
  position: relative;
  background: grey;
  overflow: hidden;
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    opacity: 0.6;
    background-image: url('https://s23705.pcdn.co/wp-content/uploads/2017/08/Membership-9.99.png');
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
`;
const Container = styled.div`
  display: flex;

`;

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    watchItemData: () => { dispatch(watchItemData()); },
    addItemToCart: (item) => { dispatch(addCartData(item)); },
  };
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.props.watchItemData();
  }


  handleClick = item => () => {
    this.props.addItemToCart(item);
  };

  render() {
    // console.log(this.state.items);
    const { items } = this.props;
    const li = items.map((item) => {
      return (
        <Item key={item.id}>
          <Link to={`${item.id}`}>
            <ShopItems elem={item} />
          </Link>
          <EditItemBlock>
            <p>
              Price:
              {item.price}
            </p>
            <EditItemButton onClick={this.handleClick(item)}>Add to Cart</EditItemButton>
          </EditItemBlock>
        </Item>
      );
    });

    return (
      <MainContainer>
        <BlockList>
          <FilterField />
          <Container>
            <List>
              {/* {loading && <div>Loading ...</div>} */}
              {li}
            </List>
            <TextInform />
          </Container>
        </BlockList>
      </MainContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(Landing));

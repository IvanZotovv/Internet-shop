import React, { Component }  from 'react';
// import * as  firebase from 'firebase/app';
import 'firebase/database';
import Elem from './DataItem'
import styled from 'styled-components';
import { withFirebase } from '../Firebase';

import { Link } from "react-router-dom";


const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
`
const Item = styled.li`
  list-style: none;
  margin: 5px;
  background: gray;
  width: 30%;
  
`
const BlockList = styled.div`
  position: relative;
  overflow: scroll;
`

class Landing extends Component {

  state = {
    loading: false, 
    elem: [],
    image: null
  }

  componentDidMount(){
    this.setState({ loading: true });

    this.props.firebase.getData().on('value', snapshot => {
      const arrayItems = snapshot.val()
      this.setState({
        elem: arrayItems,
        loading: false
      })
    })
  }

  componentWillUnmount() {
    this.props.firebase.getData().off();
  }

  render(){
    const {elem, loading} = this.state
    const li = elem.map(i => {
      return (
        <Item key={i.id}>
          <Link to={`${i.id}`}>
            <Elem item={i}/>
          </Link>
        </Item>
      )
    })
    
    return (
      <BlockList>
          <List>
          {loading && <div>Loading ...</div>}
            {li}
          </List>
      </BlockList>
    );
  }

}

export default withFirebase(Landing);


import React, {Component} from 'react'
import styled from 'styled-components';

const ItemBlock = styled.div`
  display: block;
  max-width: 100%;
  padding: 5px;
  cursor: pointer;
`
const ImageBlock = styled.div`
  height: 40vh;
`

export default class JsonElem extends Component{
  render(){
      const {title, price, img} = this.props.item
      return(
        <ItemBlock>
          <h3>{title}</h3>
          <ImageBlock><img src={img} style={{ 
            "left": 0,
            "top": 0,
            "width": "100%",
            "height": "100%" }} alt=""/></ImageBlock>
          <p>{price}</p>
        </ItemBlock>
      )
  }
}
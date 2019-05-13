import React, {Component} from 'react'
import styled from 'styled-components';
import { withFirebase } from '../Firebase'
var _ = require('lodash');

// const MainInfoBlock = styled.div`

// `
const MainInfoAboutFoto = styled.div`
  display: flex;
  flex wrap: wrap;
`
const MainInfoAbout = styled.div`

`

 class ItemInfo extends Component{

  state = {
    loading: false, 
    objectElem: null
  }

  componentDidMount(){
    this.setState({loading: true })
    const id = this.props.item.location.pathname 
    this.props.firebase.getDataId(id).on("value", snapshot => {
      const item = snapshot.val()
      this.setState({
        objectElem: item,
        loading: false,
      })
    })
  }
  componentWillUnmount(){
    this.props.firebase.getDataId().off()
  }

  render(){
    const {loading, objectElem} = this.state

    
    const match = _.filter(objectElem, (i) => {
      return i.img
    });

    const descriptionItem = match.map(i => {
      return(
        <MainInfoAbout>
          { objectElem !== null ? <div>
            <h3>{objectElem.title}</h3>
            <MainInfoAboutFoto>{i.img.map(k => {
              const id = Math.floor(Math.random() * 123568)
              console.log(id)
              return <p key={id} style={{"width": "20%", "padding": "30px"}}><img src={k} style={{ 
                "width": "100%",
                "height": "100%" }} alt=""/></p>
            })}
            </MainInfoAboutFoto>
            <p>{objectElem.price}</p>
            <p>{i.description}</p>
          </div> : <div>Loading ...</div>}
        </MainInfoAbout>
      )
    })
    return (
      <div>
        {loading && <div>Loading ...</div>}
        {descriptionItem}
      </div>
    )}
}

export default withFirebase(ItemInfo)

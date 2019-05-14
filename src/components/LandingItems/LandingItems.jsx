import React, {Component} from 'react'
import styled from 'styled-components';
import { withFirebase } from '../Firebase'
var _ = require('lodash');

// const MainInfoBlock = styled.div`

// `
const RR = styled.div`
  display: flex;
  flex-direction: column;
  flexWrap: wrap;
  width: 40%;
  height: 100%;
  overflow: hidden;
  padding: 20px;
`
const MainInfoAboutFoto = styled.div`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  padding-right: 40px;
`
const MainInfoAbout = styled.div`
  display: flex;
`
const MainInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
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
        <div>
          { objectElem !== null ? <MainInfoAbout>
            <RR>
            <MainInfoAboutFoto>
              {i.img.map(k => {
                const id = Math.floor(Math.random() * 123568)
                console.log(id)
                return <p key={id} style={{ 
                    "padding": "0",
                    "margin": "0"}}>
                  <img src={k} style={{ 
                  "width": "100%",
                  "height": "100%" }} alt=""/></p>
              })}
            </MainInfoAboutFoto>
            </RR>
            <MainInfoBlock>
              <h3>{objectElem.title}</h3>
              <p>{objectElem.price}</p>
              <p>{i.description}</p>
            </MainInfoBlock>

          </MainInfoAbout> : <div>Loading ...</div>}
        </div>
      )
    })
    return (
      <MainInfoAbout>
        {loading && <div>Loading ...</div>}
        {descriptionItem}
      </MainInfoAbout>
    )}
}

export default withFirebase(ItemInfo)

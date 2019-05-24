/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import styled from 'styled-components';
import { withFirebase } from '../Firebase';
import fb from '../Firebase/fb';
const _ = require('lodash');

const RR = styled.div`
  display: flex;
  flex-direction: column;
  flexWrap: wrap;
  max-width: 50%;
  height: 100%;
  overflow: hidden;
  padding: 0;
`;
const MainInfoAboutFoto = styled.div`
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  padding-right: 40px;
`;
const MainInfoAbout = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const MainInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
`;
const Page = styled.p`
  padding: '0',
  margin: '0',
`;

const ItemSection = styled.section`
  display: flex;
  justify-content: center;
  width: 90%;
`;

class ItemInfo extends Component {
  state = {
    loading: false,
    objectElem: null,
  }

  componentDidMount() {
    this.setState({ loading: true });
    const id = this.props.item.location.pathname;
    fb.firestore()
      .collection('items')
      .get()
      .then((collection) => {
        const itemData = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        itemData.map((i) => {
          if (`/${i.id}` === id) {
            this.setState({
              objectElem: i,
              loading: false,
            });
          }
        });
      });
  }

  render() {
    const { loading, objectElem } = this.state;

    const match = _.filter(objectElem, (i) => {
      return i.img;
    });

    const descriptionItem = match.map((i) => {
      return (
        <ItemSection>
          { objectElem !== null ? (
            <MainInfoAbout>
              <RR>
                <MainInfoAboutFoto>
                  {i.img.map((k) => {
                    const id = Math.floor(Math.random() * 123568);
                    return (
                      <Page
                        key={id}
                      >
                        <Image
                          src={k}
                          alt=""
                        />
                      </Page>
                    );
                  })}
                </MainInfoAboutFoto>
              </RR>
              <MainInfoBlock>
                <h3>{objectElem.title}</h3>
                <p>{objectElem.price}</p>
                <p>{i.description}</p>
              </MainInfoBlock>
            </MainInfoAbout>
          ) : <div>Loading ...</div>}
        </ItemSection>
      );
    });
    return (
      <MainInfoAbout>
        {loading && <div>Loading ...</div>}
        {descriptionItem}
      </MainInfoAbout>
    );
  }
}

export default withFirebase(ItemInfo);

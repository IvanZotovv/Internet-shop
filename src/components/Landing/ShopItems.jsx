/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import styled from 'styled-components';
// import AddItemToBasket from '../Basket/AddItemToBasket';

const ItemBlock = styled.div`
  display: block;
  padding: 5px;
  cursor: pointer;

`;
const ImageBlock = styled.div`
`;
const ImageBlockTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
`;

const ShopItem = ({ ...elem }) => {
  const { id, img, title } = elem.elem;
  return (
    <ItemBlock key={id}>
      <ImageBlockTitle>{title}</ImageBlockTitle>
      <ImageBlock>
        <Image
          src={img}
          alt=""
        />
      </ImageBlock>
    </ItemBlock>
  );
};


export default ShopItem;

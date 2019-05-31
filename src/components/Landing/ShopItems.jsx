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
  height: 40vh;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
`;

const ShopItem = ({ ...elem }) => {
  const item = Object.values(elem);
  const ShopItemInfo = item.map(({
    title, img, id,
  }) => {
    return (
      <ItemBlock key={id}>
        <h3>{title}</h3>
        <ImageBlock>
          <Image
            src={img}
            alt=""
          />
        </ImageBlock>
      </ItemBlock>
    );
  });
  return (
    <div>
      {ShopItemInfo}
    </div>
  );
};


export default ShopItem;

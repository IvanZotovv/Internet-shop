import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.section`
  background-color: white;
  width: 30%;
  height: 82vh;
  z-index: 2354;
  // opacity: 0.5;
  overflow-y: scroll;
  position: relative;
  margin-right: -20px;

`;
const TextContainerTitle = styled.h2`
  margin: 0;
  padding: 0 15px;
`;

export default function TextInform() {
  return (
    <TextContainer>
      <TextContainerTitle>Road Bikes</TextContainerTitle>
      Get the Greatest Deals on Cycling Gear and Bicycles Online
      Cycling Deal is the largest online warehouse for bike parts, cycling gear, and bicycles for sale in Australia
      Our vision is to see all Australians enjoying the many benefits of riding a bike. We’ve made it our mission to make great mountain bikes, road bikes, and BMX bikes accessible to anyone in the country with our expert advice, online store, and shipping nationwide.
      We are a family owned and operated online bike store, meaning we are committed to providing the best products, prices, and customer service. It is our aim to make this experience of choosing your two-wheeled best friend as exciting as it should be, and we'll do whatever we can to make that a possibility.
      Browse through our extensive store to find all your frames, accessories, gear, parts, and bicycles online with FREE shipping. Can’t find what you’re looking for? Give us a call at 03 9133 0989 or email sales@cyclingdeal.com.au 
      Flat Bar, Racing, and Push Bikes for Sale Online
      Give us a call at 03 9133 0989 or email sales@cyclingdeal.com.au Flat Bar, Racing, and Push Bikes for Sale Online With great brands like HASA, Shimano, and Wheeler, our range of road bikes is reliable and will get you going fast. We have flat bar bicycles and racing bicycles that will have you zooming around any road in Australia. Whether you' re exploring Sydney by bicycle or cycling around regional Victoria, Cycling Deal has bikes to suit your budget and frame size. If you are new to biking, getting a road bike is the perfect start. In no time you're sure to fall in love with getting around faster, more sustainably, and healthier than ever. Add cycling clothing, a car bike rack and other bicycle accessories and you'll have everything you need to get out on the roads.
      With great brands like HASA, Shimano, and Wheeler, our range of road bikes is reliable and will get you going fast. We have flat bar bicycles and racing bicycles that will have you zooming around any road in Australia. Whether you' re exploring Sydney by bicycle or cycling around regional Victoria, Cycling Deal has bikes to suit your budget and frame size.
      If you are new to biking, getting a road bike is the perfect start. In no time you're sure to fall in love with getting around faster, more sustainably, and healthier than ever. Add cycling clothing, a car bike rack and other bicycle accessories and you'll have everything you need to get out on the roads.
      All of our bikes for sale online can be shipped for free across Australia, for orders over $50. Our experienced team is ready to help you find the perfect bike for you. Get riding on your new road bike today or call us at
    </TextContainer>
  );
}

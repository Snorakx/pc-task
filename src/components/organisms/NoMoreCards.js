import React from "react";
import styled from "styled-components";
import TextContainerComponent from "../molecules/TextContainer";
import SvgIconHeart from "../../assets/heart.png";


const CustomNoMoreCardsComponent = styled.div`
  border-radius: 1.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  display: none;
  height: 100vh;
  color: #f0f0f0;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem;
  position: relative;
  &:last-child {
    display: flex;
    background-image: ${(props) => `url(${props.myUrl})` || "auto"};
    background-size: ${(props) => props.imageSize || "auto"};
  }
`;

const NoMoreCardsComponent = () => {


  return (
    <CustomNoMoreCardsComponent
      className="NoMoreCardsComponent"
      myUrl={SvgIconHeart}
    >
      <TextContainerComponent title={"Searching... Maybe there is no movies around You"} description={"Check app again leter (or refresh page)..."}/>
    </CustomNoMoreCardsComponent>
  );
};

export default NoMoreCardsComponent;

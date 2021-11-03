import React, { useState } from "react";
import styled from "styled-components";
import RateComponent from "../atoms/Rate";
import TextContainerComponent from "../molecules/TextContainer";

const CustomCard = styled.div`
  border-radius: 1.5rem;
  margin: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  display: none;
  height: 75vh;
  color: #f0f0f0;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: top;
  margin: 1rem;
  position: relative;
  &:last-child {
    display: flex;
    background-image: ${(props) => `url(${props.myUrl})` || "auto"};
    background-size: ${(props) => props.imageSize || "auto"};
  }
`;

const Card = ({ title, description, source, rate }) => {
  const [imageSize, setImageSize] = useState("cover");
  const [opacityDescription, setOpacityDescription] = useState(1);

  const changeImageSize = () => {
    if (imageSize === "cover") {
      setImageSize("contain");
      setOpacityDescription(0);
    } else {
      setImageSize("cover");
      setOpacityDescription(1);
    }
  };
  return (
    <CustomCard
      className="Card"
      myUrl={source}
      imageSize={imageSize}
      onClick={() => changeImageSize()}
    >
      <RateComponent>{rate}</RateComponent>
      <TextContainerComponent title={title} description={description} opacityDescription={opacityDescription}/>
    </CustomCard>
  );
};

export default Card;

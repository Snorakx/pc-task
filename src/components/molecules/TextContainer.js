import React from "react";
import styled from "styled-components";
import DescriptionComponent from "../atoms/Description";
import TitleComponent from "../atoms/Title";

const TextContainer = styled.div`
  background: #0f0f0f90;
  border-radius: 0px 0px 20px 20px;
  padding: 1rem;
  height: 30%;
  opacity: ${(props) => props.opacityDescription};
  transition:1s;
`;

const TextContainerComponent = ({ title, description, opacityDescription }) => {
  return (
    <TextContainer opacityDescription={opacityDescription}>
      <TitleComponent>{title}</TitleComponent>
      <DescriptionComponent>{description}</DescriptionComponent>
    </TextContainer>
  );
};

export default TextContainerComponent;

import React from "react";
import styled from "styled-components";
import MoviePosterImageComponent from "../atoms/ImageBox";
import DescriptionComponent from "../atoms/Description";
import TitleComponent from "../atoms/Title";
const CustomCard = styled.div`
  padding: 1rem 2rem;
`;
const Card = ({ title, description, source, rate }) => {
  return (
    <CustomCard>
      <TitleComponent rate={rate}>{title}</TitleComponent>
      <DescriptionComponent>{description}</DescriptionComponent>
      <MoviePosterImageComponent source={source}></MoviePosterImageComponent>
    </CustomCard>
  );
};
export default Card;

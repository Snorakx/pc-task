import React from "react";

import styled from "styled-components";
import Container from "./Container";
const MoviePosterImage = styled.div`
  background-color: #f8f5f0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  width: 100%;
`;
const CustomImage = styled.img`
  width: 100%;
`;
const MoviePosterImageComponent = ({ source }) => {
  return (
    <Container>
      <MoviePosterImage>
        <CustomImage alt="poster" src={source} />
      </MoviePosterImage>
    </Container>
  );
};
export default MoviePosterImageComponent;

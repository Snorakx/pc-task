import React, { useEffect, useState } from "react";
import Card from "./molecules/Card";
import styled, { css } from "styled-components";
import Container from "./atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import Button from "./atoms/Button";
import { getMovies, removeLastMovie } from "../state/movies/action";
import store from "../app/store";
const Wrapper = styled.section`
  background-color: #a1c38c;
  width: 100vw;
  height: 100vh;
`;

const WrapperFlex = styled.div`
  background-color: #60928c;
  padding: 0 1rem;
  height: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-top: 1rem;
`;

const WrapperComponent = (props) => {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();
  let moviesListSelector = useSelector((state) => state.movies.moviesList);
  let moviesList = [];
  if (moviesListSelector.length > 0) {
    moviesList = moviesListSelector;
  } else {
    moviesList = [
      {
        title: "Loading...",
        rating: "Loading...",
        summary: "Loading...",
        source: "Loading...",
      },
    ];
  }

  const fetchAPI = (x) => {
    dispatch(getMovies(x));
  };
  useEffect(() => {
    fetchAPI(1);
  }, []);

  const getNextMovie = () => {
    if (moviesList.length < 3) {
      fetchAPI(page);
      setPage(page + 1);
      dispatch(removeLastMovie());
    } else {
      dispatch(removeLastMovie());
    }
  };

  return (
    <Wrapper>
      <WrapperFlex>
        {moviesList.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            rate={item.title}
            description={item.title}
            source={item.imageURL}
          />
        ))}
        <Container>
          <Button handleClick={() => getNextMovie()}>Accept</Button>
          <Button handleClick={() => getNextMovie()}>Reject</Button>
        </Container>
      </WrapperFlex>
    </Wrapper>
  );
};

export default WrapperComponent;

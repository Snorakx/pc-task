import React, { useEffect, useState } from "react";
import Card from "../organisms/Card";
import styled from "styled-components";
import ContainerComponent from "../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button";
import { ReactComponent as SvgIconHeart } from "../../assets/Heart.svg";
import { ReactComponent as SvgIconCross } from "../../assets/Cross.svg";

import {
  getMovies,
  removeLastMovie,
  acceptMovie,
  rejectMovie,
} from "../../state/movies/action";
import { useSwipeable } from "react-swipeable";
import NoMoreCardsComponent from "../organisms/NoMoreCards";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #020204;
`;

const WrapperFlex = styled.div`
  flex: 3;
  padding-top: 2rem;
`;

const WrapperComponent = () => {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();
  const fetchAPI = (page) => {
    dispatch(getMovies(page));
  };
  useEffect(() => {
    fetchAPI(1);
  }, []);

  let moviesListSelector = useSelector((state) => state.movies.moviesList);
  let moviesList = [];
  moviesList = moviesListSelector;



  const getNextMovie = () => {
    if (moviesList.length < 3) {
      fetchAPI(page);
      setPage(page + 1);
      dispatch(removeLastMovie());
    } else {
      dispatch(removeLastMovie());
    }
  };

  const acceptMovieHandler = () => {
    let lastSwipedMovieID = moviesList[moviesList.length - 1].id;
    dispatch(acceptMovie(lastSwipedMovieID));
    getNextMovie();
  };

  const rejectMovieHandler = () => {
    let lastSwipedMovieID = moviesList[moviesList.length - 1].id;
    dispatch(rejectMovie(lastSwipedMovieID));
    getNextMovie();
  };
  const handlers = useSwipeable({
    onSwiped: () => rejectMovieHandler(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Wrapper>
       {moviesList.length != 0 ?(
      <WrapperFlex {...handlers}>
        {moviesList.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            rate={item.rating}
            description={item.summary}
            source={item.imageURL}
          />
        ))}
      </WrapperFlex>
      ):
      <NoMoreCardsComponent/>
      }
      {moviesListSelector.length != 0 ?(
      <ContainerComponent myHeight="20vh" flex="1">
        <Button handleClick={() => rejectMovieHandler()}>
          <SvgIconCross />
        </Button>
        <Button handleClick={() => acceptMovieHandler()}>
          <SvgIconHeart />
        </Button>
      </ContainerComponent>
      ):<></>}
    </Wrapper>
  );
};

export default WrapperComponent;

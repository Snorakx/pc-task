import React from "react";

import styled from "styled-components";
import {useDispatch} from "react-redux";
import { getMovies } from "../../state/movies/action";

const Button = (props) => {
  const CustomButton = styled.button`
    font-size: 2rem;
    text-align: center;
    background-color: #0f0f0f;
    border: none;
    outline: none;
    color: #f0f0f0;
    padding: 1rem 2rem;
  `;
  const dispatch = useDispatch();

  const fetchAPI = () =>{
    dispatch(getMovies());
  }


  return (
      <CustomButton onClick={fetchAPI}>{props.children}</CustomButton>
  );
};
export default Button;

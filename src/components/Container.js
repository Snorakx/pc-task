import React from "react";
import Button from "./Button";

import styled, { css } from "styled-components";

const Container = (props) => {

    const Container = styled.div`
    background-color: #f8f5f0;
    border: none;
    outline: none;
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-evenly;

  
  `;
  return (
    <Container>
      {props.children}
    </Container>
  );
};
export default Container;

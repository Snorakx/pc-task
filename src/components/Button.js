import React from "react";

import styled, { css } from "styled-components";

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


  return (
      <CustomButton>{props.children}</CustomButton>
  );
};
export default Button;

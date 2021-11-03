import React, { useState } from "react";

import styled from "styled-components";
const CustomButton = styled.button`
  font-size: 2rem;
  text-align: center;
  background-color: #0f0f0f;
  border: none;
  outline: none;
  color: #f0f0f0;
  padding: 1rem 2rem;
`;

const ButtonComponent = (props) => {
  return (
    <CustomButton onClick={props.handleClick}>{props.children}</CustomButton>
  );
};
export default ButtonComponent;

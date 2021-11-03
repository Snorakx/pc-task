import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  font-size: 1.5rem;
  text-align: center;
  background-color: #0f0f0f;
  border: none;
  outline: none;
  padding: 1rem;
  color: #f0f0f0;
  border-radius: 50%;
  line-height: 0;
  cursor:pointer;
  &:active{
    background-color:#353535
  }
  svg{
    width:38px;
    height:38px;
  }
`;

const ButtonComponent = (props) => {
  return (
    <CustomButton onClick={props.handleClick}>{props.children}</CustomButton>
  );
};
export default ButtonComponent;

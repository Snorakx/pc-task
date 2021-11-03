import React from "react";

import styled from "styled-components";
const Rate = styled.div`
  background-color: #f8f5f0;
  border: none;
  outline: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
const RateComponent = (props) => {
  return <Rate>{props.children}</Rate>;
};
export default RateComponent;

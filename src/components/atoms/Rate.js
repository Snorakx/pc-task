import React from "react";
import styled from "styled-components";

const Rate = styled.div`
  position: absolute;
  top: 0;
  color: #000;
  right: 6%;
  padding: 0.7rem 1rem;
  background-image: radial-gradient(67.14% 67.14% at 50% 50%, #FFF4AD 0%, #FFD100 100%);
  border-radius: 0 0 10px 10px;
  font-size: 25px;
  font-weight: 700;
`;

const RateComponent = (props) => {
  return <Rate>{props.children}</Rate>;
};
export default RateComponent;

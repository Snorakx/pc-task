import React from "react";

import styled from "styled-components";
import ContainerComponent from "./Container";
const Description = styled.div`
  background-color: #f8f5f0;
  display: flex;
  align-items: center;
  padding: 2rem;
`;
const DescriptionComponent = (props) => {
  return (
    <ContainerComponent>
      <Description>{props.children}</Description>
    </ContainerComponent>
  );
};
export default DescriptionComponent;

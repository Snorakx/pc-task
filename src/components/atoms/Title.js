import React from "react";

import styled from "styled-components";
import Container from "./Container";
import Rate from "./Rate";
const Title = styled.div`
  background-color: #f8f5f0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 2rem;
`;
const TitleComponent = (props) => {
  return (
    <Container>
      <Title>{props.children}</Title>
      <Rate>{props.rate}</Rate>
    </Container>
  );
};
export default TitleComponent;

import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(20px + (36 - 20) * ((100vw - 300px) / (3000 - 300)));
  padding-bottom: 1rem;
  text-align: left;
  font-weight: 700;
`;

const TitleComponent = (props) => {
  return <Title>{props.children}</Title>;
};

export default TitleComponent;

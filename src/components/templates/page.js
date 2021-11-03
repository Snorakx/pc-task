import React from "react";
import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const PageComponent = (props) => {
  return <Page>{props.children}</Page>;
};
export default PageComponent;

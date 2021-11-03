import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex: ${(props) => props.flex || "auto"};
  height: ${(props) => props.myHeight || "auto"};
  align-items: flex-start;
`;

const ContainerComponent = ({ myHeight, flex, flexDirection, children }) => {
  return (
    <Container myHeight={myHeight} flex={flex} flexDirection={flexDirection}>
      {children}
    </Container>
  );
};
export default ContainerComponent;

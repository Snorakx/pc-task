import React from "react";

import styled, { css } from "styled-components";

const Wrapper = (props) => {
  const Wrapper = styled.section`
    background-color: #a1c38c;
    width: 100vw;
    height: 100vh;

   
  `;
  const WrapperFlex = styled.div`
  background-color: #60928c;
  padding:0 1rem;
  height:calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-top:1rem;
`;

  return (
    <Wrapper>
      <WrapperFlex>{props.children}</WrapperFlex>
    </Wrapper>
  );
};
export default Wrapper;

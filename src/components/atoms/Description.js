import React from "react";

import styled from "styled-components";

const Description = (props) => {

    const Description = styled.div`
    background-color: #f8f5f0;
    display:flex;
    align-items:center;
    padding:2rem;
  `;
  return (
    <Description>
      {props.children}
    </Description>
  );
};
export default Description;

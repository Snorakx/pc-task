import React from "react";
import styled from "styled-components";

const Description = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (3000 - 300)));
`;

const DescriptionComponent = (props) => {
  const truncate = (str) => {
    return str.length > 170 ? str.substring(0, 170) + "..." : str;
  };
  return <Description>{truncate(props.children)}</Description>;
};
export default DescriptionComponent;

import React, { memo } from "react";
import styled from "styled-components";

const Icon = styled.span`
  transition: 0.5s;
  margin: 0 !important;
  padding: 0 0 0 10px !important;
  img {
    transform: rotate(${({ rotate }) => (rotate ? "180deg" : "0deg")});
    transition: 0.5s;
  }
`;

const Rotate = ({ children, rotate }) => {
  return (
    <React.Fragment>
      <Icon rotate={rotate}>
        <img src={children} alt="arrow" height={20} width={20}/>
      </Icon>
    </React.Fragment>
  );
};

export default memo(Rotate);

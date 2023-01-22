import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 80px;
  height: 80px;
  margin:auto;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #56433D transparent #56433D transparent;
    animation: spinner-border 1.2s linear infinite;
  }

  @keyframes spinner-border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;

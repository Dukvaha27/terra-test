import React from "react";
import styled from "styled-components";

const ThStyled = styled.th`
  align-items: center;
  padding: 10px 20px;
  background: #56433d;
  color: #f9c941;
  border-right: 2px solid;
  font-size: 0.9em;
  transition: .3s;
  ${({onClick}) => {
    return onClick && {
      "&:hover":{
        cursor:"pointer",
        backgroundColor:'#6c534d',
        transition:".3s",
      }
    }
  }}
`;

const Th = ({ children, ...props }) => {
  return <ThStyled {...props}>{children}</ThStyled>;
};

export default Th;

import React from "react";
import styled from "styled-components";

const TdStyled = styled.td`
  vertical-align: middle;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid #56433d;
  border-bottom: 2px solid #56433d;
  border-right: 2px solid #56433d;
`;

const Td = ({ children, ...props }) => {
  return <TdStyled {...props}>{children}</TdStyled>;
};

export default Td;

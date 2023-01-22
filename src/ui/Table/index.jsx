import React, {memo} from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  border-spacing: 0 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  th:first-child {
    text-align: left;
  }
  th:last-child {
    border-right: none;
  }
  td:first-child {
    border-left: 2px solid #56433d;
  }
  td:nth-child(2) {
    text-align: left;
  }
  tr {
    transition: 0.3s;
    cursor: pointer;
  }
  tr:hover {
    background-color: #ccc;
    transform: scale(1.01);
    transition: 0.3s;
  }
`;
const Table = ({ children, ...props }) => {
  return <TableStyled {...props}>{children}</TableStyled>;
};

export default memo(Table);

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const LiStyled = styled.li`
  margin: 0.25rem 0;
  padding: 10px 5px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  a {
    color: white;
    text-decoration: unset;
  }
`;

const ListContainer = styled.div`
  margin-right: 1rem;
`;

const Span = styled.span`
  color: ${({ active }) => (active ? "red" : "white")};
`;

const Sidebar = () => {
  return (
    <ListContainer>
      <UlStyled>
        <LiStyled>
          <NavLink to={"/"}>
            {({ isActive }) => <Span active={isActive}> Questions</Span>}
          </NavLink>
        </LiStyled>
        <LiStyled>
          <NavLink to={"/tags"}>
            {({ isActive }) => <Span active={isActive}> Tags</Span>}
          </NavLink>
        </LiStyled>
        <LiStyled>
          <NavLink to={"/users"}>
            {({ isActive }) => <Span active={isActive}>Users</Span>}
          </NavLink>
        </LiStyled>
      </UlStyled>
    </ListContainer>
  );
};

export default Sidebar;

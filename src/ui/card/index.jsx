import React, {memo} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: ${({ label }) => (label ? "20px" : "10px")} 10px 10px;
  width: ${({ width }) => width || "6rem"};
  box-shadow: 0 0 20px -10px;
  transition: 0.3s;
  cursor: ${({ isClicked }) => (isClicked ? "pointer" : "unset")};
  ${({ isClicked }) => {
    return (
      isClicked && {
        ":hover": {
          transition: ".3s",
          backgroundColor: "#efefef",
          transform: "scale(1.1)",
        },
      }
    );
  }}
`;

const LabelContainer = styled.div`
  position: absolute;
  top: -1.2rem;
  left: 0;
  color: #825757;
  font-weight: bold;
`;
const Card = ({ children, width, label, isClicked, onClick }) => {
  return (
    <Wrapper
      width={width}
      label={label}
      isClicked={isClicked}
      onClick={onClick}
    >
      {label && <LabelContainer>{label}</LabelContainer>}
      {children}
    </Wrapper>
  );
};

export default memo(Card);

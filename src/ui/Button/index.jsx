import React, {memo} from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #f9c941 51%,
    #56433d 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  :hover {
    transition: 0.3s ease-in-out;
    background-position: right center;
  }

  :active {
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(
      to right,
      #718c89 0%,
      #937d3b 51%,
      #3f342f 100%
    );
  }

  :focus {
    transition: 0.2s ease-in-out;
    outline: 1.5px solid rgba(63, 52, 47, 0.6);
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default memo(Button);

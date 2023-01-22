import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
  margin-right: .5rem;
  height: calc(1rem);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  
`
const Input = ({...props}) => {
    return <StyledInput {...props}/>;
};

export default Input;

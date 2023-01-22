import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  width: fit-content;
  margin: 2rem auto;
  background-color: burlywood;
  padding: 15px;
  border-radius: 10px;
  box-shadow: inset 0 0 11px 0;
`;
const EmptyQuestions = ({view}) => {
    return (
        <Div>
            {view}
        </Div>
    );
};

export default EmptyQuestions;

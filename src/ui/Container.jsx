import React, {memo} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: ${({ width }) => width || "fit-content"};
  min-width: 80vw;
  margin: auto;
`;
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default memo(Container);

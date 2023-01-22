import styled from "styled-components";

export const DivClamp = styled.div`
  width: ${({ width }) => width || 100}px;
  -webkit-line-clamp: ${({ clamp }) => clamp || 1};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

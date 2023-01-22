import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc((${({width}) => width || '6rem'} * 6) + 8px);
`;

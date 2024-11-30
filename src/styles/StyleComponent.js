import styled from "styled-components";

//props에서 사용하는 변수는 $를 붙여서 사용(warining 방지)
export const Wrap = styled.div`
  overflow: hidden;
  height: ${(props) => props.$height || "100%"};
  min-width: ${(props) => props.$minWidth || "100%"};
  position: "absolute";
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const Main = styled.main`
  width: ${(props) => props.$width || "100%"};
  margin: 0 auto;
  padding: ${(props) => props.$padding || 0};
`;

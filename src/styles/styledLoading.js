import styled, { keyframes } from "styled-components";

// 점 깜빡임 애니메이션
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  font-size: 24px; /
  font-weight: bold;
  text-align: center;
  color: #333; /* 글씨 색상 */
  animation: ${blink} 1.5s ease-in-out infinite; /* 깜빡임 애니메이션 */
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: var(--star-color);
  overflow: hidden;

  /* 배경 이미지(외부에서 bg prop으로 전달) + 오버레이 그라데이션 */
  background-image: ${({ bg }) =>
    bg
      ? `linear-gradient(180deg, rgba(10,8,30,0.45) 0%, rgba(30,12,60,0.25) 50%, rgba(6,6,20,0.6) 100%), url(${bg})`
      : `linear-gradient(180deg, var(--primary-color) 0%, var(--accent-color) 50%, var(--background-end) 100%)`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;


export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

// MoreBtn을 react-router Link 컴포넌트로 스타일링 (중앙 버튼)
export const MoreBtn = styled(Link)`
  display: inline-block;
  padding:72px 32px;
  background: rgba(31, 13, 86, 1);
  color: #fff;
  border: 1px solid #fff;
  border-radius: 100%;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: transform .15s ease, box-shadow .15s ease;
  z-index: 2;

  &:hover {
    box-shadow: 0 12px 30px rgba(42,26,96,0.35);
  }

  &:active {
    
  }
`;



export const GalaxyGlow = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  top: 20%;
  left: 30%;
`;

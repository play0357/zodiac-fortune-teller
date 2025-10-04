import styled from "styled-components";

export const Card = styled.ol`
  height: 215px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;

  &:hover {
    background: #f0f0f0; /* 연한 회색 배경 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 더 강한 그림자 */
    transform: scale(1.05); /* 5% 확대 */
    cursor: pointer;
  }
`;

export const CardList = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap; /* 카드가 줄 바꿈되도록 */
  gap: 20px; /* 카드 간 간격 */
  justify-content: center; /* 중앙 정렬 */

  /* 화면 크기에 따라 카드 개수 조정 */
  @media (max-width: 1200px) {
    & > ${Card} {
      width: calc((100% - 60px) / 4); /* 기본 4개 */
    }
  }

  @media (max-width: 900px) {
    & > ${Card} {
      width: calc((100% - 40px) / 3); /* 3개 */
    }
  }

  @media (max-width: 600px) {
    & > ${Card} {
      width: calc((100% - 20px) / 2); /* 2개 */
    }
  }

`;
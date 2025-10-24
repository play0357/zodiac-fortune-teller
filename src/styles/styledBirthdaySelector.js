import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden; /* 자식 요소 이탈 방지 */
`;

export const BirthdaySelectorBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-height: 50px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    max-height: none; /* 모바일에서 높이 제한 해제 */
    gap: 10px;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  min-width: 150px;
  max-width: 160px;
  cursor: pointer;
  transition: border-color 0.2s;

  option[disabled][value=""] {
    display: none;
  }

  &:hover {
    border-color: #666;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    max-width: 100%; /* 모바일에서 너비 확장 */
  }
`;

export const Result = styled.button`
  font-size: 1rem;
  color: #fff;
  font-weight: ${props => (props.hasDate ? 'bold' : 'normal')};
  margin: auto;
  margin-top: 10px;
  width: 100%;
  min-width: 150px;
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  text-align: center; /* 텍스트 중앙 정렬 */
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: 0.2s ease;
  
  &:hover {
  background: var(--accent-color);
  color: #fff;
`;
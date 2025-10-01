import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
 /* 기본 CSS 초기화 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* 요소 크기 계산을 쉽게 */
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  ul, ol {
    list-style: none; /* 리스트의 점 제거 */
  }

  a {
    text-decoration: none; /* 링크의 밑줄 제거 */
    color: inherit; /* 부모 요소의 색상 상속 */
  }

  button {
    border: none; /* 버튼의 기본 테두리 제거 */
    background: none; /* 기본 배경 제거 */
    cursor: pointer; /* 마우스 커서 변경 */
  }

  img {
    max-width: 100%; /* 이미지가 부모 요소를 넘지 않도록 */
    height: auto;
  }
`;

export default GlobalStyles;
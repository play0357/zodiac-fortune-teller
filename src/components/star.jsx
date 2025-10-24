import styled from 'styled-components';

// 반짝이는 별 스타일
const StarElement = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 2s infinite;

  @keyframes twinkle {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }
`;

function Star() {
  // 80개의 별을 랜덤 위치와 크기로 생성
  const stars = Array.from({ length: 80 }).map((_, index) => {
    const size = Math.random() * 3 + 1; // 1~4px 크기
    const left = Math.random() * 100; // 0~100% 위치
    const top = Math.random() * 100;
    const animationDelay = Math.random() * 2; // 애니메이션 지연

    return (
      <StarElement
        key={index}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    );
  });

  return <>{stars}</>;
}

export default Star;
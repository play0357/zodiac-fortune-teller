import styled from "styled-components";


export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    var(--primary-color) 0%,
    var(--accent-color) 50%,
    var(--background-end) 100%
  );
  overflow: hidden;
  position: relative;
  color: var(--star-color);

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Title = styled.div`
  font-size: 24px; /
  font-weight: bold;
  text-align: center;
  color: #fff; /* 글씨 색상 */
`;

export const MoreBtn = styled.button`
    padding: 5px 10px;
    background: #2a1a60;
    color: #fff;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
`;

export const ContentCard = styled.div`
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--card-border);
  text-align: center;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
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

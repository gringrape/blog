import styled from 'styled-components';

const Container = styled.div`
  margin-block: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  img {
    border-radius: 50%;
    width: 100px;
    aspect-ratio: 1/1;
  }

  h1 {
    font-size: 1.5em;
  }
`;

export default function Hero() {
  return (
    <Container>
      <img alt="avatar" src="https://snworksceo.imgix.net/cav/f177b95f-71b5-44f3-bea3-28c768c4349a.sized-1000x1000.png?w=1000" />
      <h1>Gringrape 블로그</h1>
      <p>느낀점을 가볍게 남깁니다</p>
    </Container>
  );
}

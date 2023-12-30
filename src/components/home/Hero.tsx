import styled from 'styled-components';

import Avatar from './Avatar';

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
      <Avatar />
      <h1>gringrape 블로그</h1>
      <p>느낀점을 가볍게 남깁니다</p>
    </Container>
  );
}

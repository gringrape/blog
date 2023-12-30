import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.footer`
  margin-top: 5em;
  margin-inline: auto;
  padding-block: 3em;
  width: 85%;
  text-align: center;
  color: ${colors.normal};
`;

export default function Footer() {
  return (
    <Container>
      © 2023 gringrape
    </Container>
  );
}

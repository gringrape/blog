import { ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <Container>
      <Helmet>
        <title>gringrape 블로그</title>
        <link rel="icon" href="./favicon.ico" />
      </Helmet>
      {children}
    </Container>
  );
}

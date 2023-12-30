import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.normal};
  
  a {
    color: ${colors.focus};
  }
`;

function Logo() {
  return (
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
        <title>Home</title>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </a>
  );
}

const ItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1em;

  `;

const Item = styled.li<{ selected: boolean; }>`
  a {
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
    color: ${({ selected }) => (selected ? colors.focus : colors.normal)};
    text-decoration: none;
  }

  a:hover {
    color: ${colors.focus};
  }
`;

function Items({ currentPath }: {
  currentPath: string;
}) {
  return (
    <ItemsContainer>
      <Item selected={currentPath === '/'}>
        <a
          href="/"
        >
          Home
        </a>
      </Item>
      <Item selected={currentPath === '/posts'}>
        <a
          href="/posts"
        >
          Posts
        </a>
      </Item>
    </ItemsContainer>
  );
}

export default function Navigation({ pathname }: {
  pathname: string;
}) {
  return (
    <Container>
      <Logo />
      <Items currentPath={pathname} />
    </Container>
  );
}

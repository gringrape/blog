import styled from 'styled-components';

import { MouseEventHandler } from 'react';

import { colors } from '../../styles';

import useNaviateToRandomPost from '../../hooks/useNavigateRandomPost';

const Container = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};
  
  a {
    color: ${colors.focus};
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1em;

  `;

const LinkItem = styled.li<{ selected: boolean; }>`
  a {
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
    color: ${({ selected }) => (selected ? colors.focus : colors.normal)};
    text-decoration: none;
  }

  a:hover {
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

function Links({ currentPath }: {
  currentPath: string;
}) {
  const navigateToRandomPost = useNaviateToRandomPost();

  const handleClickRandom: MouseEventHandler = (e) => {
    e.preventDefault();
    navigateToRandomPost();
  };

  return (
    <LinksContainer>
      <LinkItem selected={currentPath === '/'}>
        <a href="/">
          Home
        </a>
      </LinkItem>
      <LinkItem selected={currentPath === '/posts'}>
        <a href="/random" onClick={handleClickRandom}>
          Random
        </a>
      </LinkItem>
    </LinksContainer>
  );
}

export default function Navigation({ pathname }: {
  pathname: string;
}) {
  return (
    <Container>
      <Logo />
      <Links currentPath={pathname} />
    </Container>
  );
}

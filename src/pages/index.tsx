import styled from 'styled-components';

import Layout from '../components/layout/Layout';

import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import RecentPosts from '../components/home/RecentPosts';
import Footer from '../components/home/Footer';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function IndexPage({ location }: {
  location: { pathname: string; };
}) {
  return (
    <Layout>
      <Navigation pathname={location.pathname} />
      <Main>
        <Hero />
        <RecentPosts />
      </Main>
      <Footer />
    </Layout>
  );
}

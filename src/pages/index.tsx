import styled from 'styled-components';

import Layout from '../components/layout/Layout';

import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import Posts from '../components/home/Posts';
import Footer from '../components/home/Footer';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function IndexPage({ location }: {
  location: {
    pathname: string;
  };
}) {
  return (
    <Layout>
      <Navigation pathname={location.pathname} />
      <Main>
        <Hero />
        <Posts />
      </Main>
      <Footer />
    </Layout>
  );
}

export default IndexPage;

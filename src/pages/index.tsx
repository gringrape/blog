import styled from 'styled-components';

import { graphql } from 'gatsby';
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

type AllMarkdownsData = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          date: string;
          slug: string;
          title: string;
        }
      }
    }[];
  }
};

export default function IndexPage({ location, data }: {
  location: {
    pathname: string;
  };
  data: AllMarkdownsData;
}) {
  const posts = data.allMarkdownRemark.edges.map(({
    node: {
      frontmatter: f,
    },
  }) => ({
    title: f.title,
    link: f.slug,
    date: f.date,
  }));

  return (
    <Layout>
      <Navigation pathname={location.pathname} />
      <Main>
        <Hero />
        <Posts posts={posts} />
      </Main>
      <Footer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        } 
      }
    }
  }
`;

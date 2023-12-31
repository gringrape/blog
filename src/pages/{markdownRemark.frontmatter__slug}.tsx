import './markdown-style.css';
import 'highlight.js/styles/github-dark.css';

import styled from 'styled-components';

import { graphql } from 'gatsby';

import hljs from 'highlight.js';

import { useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Navigation from '../components/home/Navigation';

const Article = styled.article`
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 5em auto;
  padding: 45px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #333;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const Header = styled.header`
  margin-bottom: 3em;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: none;
    
    strong {
      font-size: 1.5em;
    }
  
    span {
      font-size: 0.5em;
    }
  }
`;

export default function BlogPostTemplate({
  data,
}: {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      },
      html: string;
    }
  }
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <Navigation pathname="" />
      <Article className="markdown-body">
        <Header>
          <h1>
            <strong>{frontmatter.title}</strong>
            <span>{frontmatter.date}</span>
          </h1>
        </Header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

import { graphql, navigate, useStaticQuery } from 'gatsby';

import random from 'lodash/random';

import { AllMarkdownsData } from './useRecentPosts';

function pickRandom<T>(array: T[]): T {
  const randomIndex = random(0, array.length - 1);
  return array[randomIndex];
}

export default function useNaviateToRandomPost() {
  const data = useStaticQuery<AllMarkdownsData>(graphql`
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
`);

  const posts = data.allMarkdownRemark.edges.map(({
    node: {
      frontmatter: f,
    },
  }) => ({
    title: f.title,
    link: f.slug,
    date: f.date,
  }));

  const navigateToRandomPost = () => {
    const post = pickRandom(posts);
    navigate(post.link);
  };

  return navigateToRandomPost;
}

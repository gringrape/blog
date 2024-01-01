import { graphql, useStaticQuery } from 'gatsby';

export type AllMarkdownsData = {
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

export default function usePosts() {
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

  return posts;
}

import styled from 'styled-components';

import { colors } from '../../styles';

import PostListItem from '../PostListItem';

const Container = styled.div`
  width: 85%;

  h3 {
    font-size: 1.3em;
    padding-block: 1em;
    border-bottom: 1px solid ${colors.border};
  }
`;

const ItemContainer = styled.li`
  padding-block: 1em;
  padding-inline: 0.5em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};

  a {
    color: ${colors.normal};
    text-decoration: none;
  }
`;

function PostItem({ post }: {
  post: PostListItem;
}) {
  return (
    <ItemContainer key={post.title}>
      <a href={post.link}>
        {post.title}
      </a>
      <div>{post.date}</div>
    </ItemContainer>
  );
}

export default function Posts({ posts }: {
  posts: PostListItem[];
}) {
  return (
    <Container>
      <h3>Recent Posts</h3>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.title} post={post} />
        ))}
      </ul>
    </Container>
  );
}

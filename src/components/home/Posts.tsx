import styled from 'styled-components';

import { colors } from '../../styles';

const Container = styled.div`
  width: 85%;

  h3 {
    font-size: 1.3em;
    padding-block: 1em;
    border-bottom: 1px solid ${colors.border};
  }
`;

const posts = [
  { title: '영화를 보다가', date: '2024.03.01' },
  { title: '김밥을 먹다가', date: '2025.03.01' },
  { title: '사진을 보다가', date: '2026.03.01' },
];

type Post = {
  title: string;
  date: string;
};

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
  post: Post;
}) {
  return (
    <ItemContainer key={post.title}>
      <a href="/posts">
        {post.title}
      </a>
      <div>{post.date}</div>
    </ItemContainer>
  );
}

export default function Posts() {
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

import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';
import { blogPosts } from '../blogs/posts';

const Wrap = styled.section`
  padding: 0;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Hint = styled.p`
  font-size: 13px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    text-decoration: none;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(110, 231, 255, 0.08);
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 700;
`;

const Title = styled.h3`
  font-size: 15px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.35;
`;

const Meta = styled.p`
  font-size: 12px;
`;

const Blogs = () => {
  return (
    <Wrap>
      <SectionCard>
        <HeaderRow>
          <SectionTitle>Blogs</SectionTitle>
          <Hint>
            Writing on Medium:{' '}
            <a href="https://medium.com/@shingalaanirudh" target="_blank" rel="noopener noreferrer">@shingalaanirudh</a>
          </Hint>
        </HeaderRow>

        <Grid>
          {blogPosts.map(post => (
            <CardLink key={post.url} href={post.url} target="_blank" rel="noopener noreferrer">
              <CardBody>
                <Tag>{post.tag}</Tag>
                <Title>{post.title}</Title>
                <Meta>Read on Medium</Meta>
              </CardBody>
            </CardLink>
          ))}
        </Grid>
      </SectionCard>
    </Wrap>
  );
};

export default Blogs;

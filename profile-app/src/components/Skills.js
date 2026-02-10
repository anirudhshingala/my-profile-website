import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const SkillsContainer = styled.section`
  padding: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div``;

const GroupTitle = styled.h3`
  font-size: 14px;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceStrong};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
`;

const skillGroups = [
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'GCP', 'Networking']
  },
  {
    title: 'Containers & Platform',
    items: ['Kubernetes', 'Istio', 'Docker', 'Helm']
  },
  {
    title: 'CI/CD & Delivery',
    items: ['GitHub Actions', 'Jenkins', 'GitOps', 'Containerized pipelines']
  },
  {
    title: 'IaC & Automation',
    items: ['Terraform', 'Terraform modules', 'Feature environments', 'n8n', 'Budibase', 'Scripting']
  },
  {
    title: 'Observability',
    items: ['Datadog', 'Grafana', 'Prometheus', 'Alerting']
  },
  {
    title: 'Languages & Practices',
    items: ['Go', 'Python', 'Git', 'Project management', 'Ownership', 'Problem solving']
  }
];

const Skills = () => {
  return (
    <SkillsContainer>
      <SectionCard>
        <SectionTitle>Skills & Tooling</SectionTitle>
        <Grid>
          {skillGroups.map(group => (
            <Group key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <Chips>
                {group.items.map(item => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </Chips>
            </Group>
          ))}
        </Grid>
      </SectionCard>
    </SkillsContainer>
  );
};

export default Skills;

import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 20px;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background: #61dafb;
  margin: 5px;
  padding: 10px;
  border-radius: 4px;
`;

const skills = [
  'AWS', 'Kubernetes', 'Docker', 'CICD - Github Actions/Jenkins', 'Terraform',
  'Grafana/Prometheus', 'ArgoCD', 'Helm', 'Networking', 'Git', 'Python', 'SQL',
  'Project Management', 'Getting things Done', 'Designing Solution and Processes',
  'Analytical Thinking Skills', 'Creative Problem Solving'
];

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <SkillsList>
        {skills.map(skill => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;

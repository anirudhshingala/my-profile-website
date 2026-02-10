import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const EducationContainer = styled.section`
  padding: 0;
`;

const Degree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DegreeTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Education = () => {
  return (
    <EducationContainer>
      <SectionCard>
        <SectionTitle>Education</SectionTitle>
        <Degree>
          <DegreeTitle>BE Computer Engineering, Mumbai University, Mumbai</DegreeTitle>
          <p>June 2016 — May 2020</p>
          <p>Graduated with a 7.91 CGPA.</p>
        </Degree>
      </SectionCard>
    </EducationContainer>
  );
};

export default Education;

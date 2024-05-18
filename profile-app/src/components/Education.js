import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 20px;
`;

const Education = () => {
  return (
    <EducationContainer>
      <h2>Education</h2>
      <div>
        <h3>BE Computer Engineering, Mumbai University, Mumbai</h3>
        <p>June 2016 — May 2020</p>
        <p>Graduated with a 7.91 CGPA.</p>
      </div>
    </EducationContainer>
  );
};

export default Education;

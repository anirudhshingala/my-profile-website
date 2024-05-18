import React from 'react';
import styled from 'styled-components';

const AwardsContainer = styled.section`
  padding: 20px;
`;

const Awards = () => {
  return (
    <AwardsContainer>
      <h2>Awards and Recognition</h2>
      <ul>
        <li>Superhero Awards Deepintent, 2024</li>
        <li>Super Hero, 2023</li>
      </ul>
    </AwardsContainer>
  );
};

export default Awards;

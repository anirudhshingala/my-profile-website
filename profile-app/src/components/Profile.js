import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.section`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <h2>Profile</h2>
      <p>
        SRE with 3+ years of experience. Proficient in SRE and DevOps tools and processes,
        automating tasks, and troubleshooting in hybrid cloud environments.
      </p>
    </ProfileContainer>
  );
};

export default Profile;

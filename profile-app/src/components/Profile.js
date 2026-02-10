import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const ProfileContainer = styled.section`
  padding: 0;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <SectionCard>
        <SectionTitle>About</SectionTitle>
        <p>
          SRE / Platform Engineer with 5+ years of overall experience. Proficient in SRE and DevOps
          tools and processes, automating tasks, and troubleshooting hybrid cloud environments and
          application failures. I enjoy designing products and automation tools from scratch,
          optimizing infrastructure and delivery systems, integrating external tools, and converting
          ideas into practical working solutions. Strong ownership mindset, comfortable in fast-paced
          environments, and able to drive end-to-end delivery with minimal hand-holding.
        </p>
      </SectionCard>
    </ProfileContainer>
  );
};

export default Profile;

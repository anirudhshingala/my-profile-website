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
          Platform Engineer/SRE with 5+ years of overall experience. Proficient in automation,
          tools and processes. Troubleshooting hybrid cloud environments and
          application failures. I enjoy designing products and tools from scratch,
          optimizing infrastructure and delivery systems, integrating external tools, and converting
          ideas into practical working solutions. Strong ownership mindset, comfortable in fast-paced
          environments, and able to drive end-to-end delivery with minimal hand-holding.
        </p>
      </SectionCard>
    </ProfileContainer>
  );
};

export default Profile;

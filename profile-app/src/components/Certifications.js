import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const CertificationsContainer = styled.section`
  padding: 0;
`;

const Certifications = () => {
  return (
    <CertificationsContainer>
      <SectionCard>
        <SectionTitle>Certifications</SectionTitle>
        <ul>
          <li>CKA: Certified Kubernetes Administrator - December 2023</li>
        </ul>
      </SectionCard>
    </CertificationsContainer>
  );
};

export default Certifications;

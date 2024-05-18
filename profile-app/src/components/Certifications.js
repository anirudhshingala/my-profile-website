import React from 'react';
import styled from 'styled-components';

const CertificationsContainer = styled.section`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Certifications = () => {
  return (
    <CertificationsContainer>
      <h2>Certifications</h2>
      <ul>
        <li>CKA: Certified Kubernetes Administrator - December 2023</li>
      </ul>
    </CertificationsContainer>
  );
};

export default Certifications;

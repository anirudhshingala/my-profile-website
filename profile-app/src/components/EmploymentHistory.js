import React from 'react';
import styled from 'styled-components';

const EmploymentContainer = styled.section`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Job = styled.div`
  margin-bottom: 20px;
`;

const EmploymentHistory = () => {
  return (
    <EmploymentContainer>
      <h2>Employment History</h2>
      <Job>
        <h3>Sr. Site Reliability Engineer, DeepIntent, Mumbai (Remote)</h3>
        <p>September 2021 — Present</p>
        <ul>
          <li>Worked throughout SDLC of 35+ micro-services...</li>
          <li>Worked on setting up CICD for application deployment...</li>
          <li>Managed infrastructure required for the platform...</li>
          {/* Add other points as necessary */}
        </ul>
      </Job>
      <Job>
        <h3>DCO Tech Intern, Amazon Web Services, Mumbai</h3>
        <p>June 2020 — May 2021</p>
        <ul>
          <li>Worked on large scale datacenter with ~18000 servers...</li>
          <li>Worked with router and switches and link troubleshooting...</li>
          {/* Add other points as necessary */}
        </ul>
      </Job>
    </EmploymentContainer>
  );
};

export default EmploymentHistory;

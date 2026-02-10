import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const EmploymentContainer = styled.section`
  padding: 0;
`;

const Job = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const JobTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const JobDates = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`;

const EmploymentHistory = () => {
  return (
    <EmploymentContainer>
      <SectionCard>
        <SectionTitle>Experience</SectionTitle>
        <Job>
          <JobHeader>
            <JobTitle>Platform Engineer, Gooten (Remote)</JobTitle>
            <JobDates>October 2024 — Present</JobDates>
          </JobHeader>
          <ul>
          <li>
            Worked in a small, high-impact team with end-to-end exposure across systems and platforms,
            especially in a greenfield product environment.
          </li>
          <li>
            Built CI/CD for 20+ .NET microservices using GitHub Actions and managed infrastructure provisioning
            on Azure with Terraform.
          </li>
          <li>
            Refactored and standardized Terraform across environments using modules, eliminating redundancy and
            enabling centralized management with environment-specific configuration with negligible infrastructure recreation.
          </li>
          <li>
            Designed and implemented automated feature environments that spin up isolated backend + UI environments per PR;
            built a Go-based API server and automation using tools like n8n, scripts, and pipelines to eliminate manual work.
          </li>
          <li>
            Migrated pipeline process from GitHub Actions to a custom script-based approach within a reusable containerized setup,
            enabling developers to replicate pipeline behavior locally, reducing debugging time and increasing reliability.
          </li>
          <li>
            Set up Datadog for observability and alerts; introduced and deployed tools such as LaunchDarkly (safe pipeline rollouts),
            n8n, and Budibase to improve workflow automation and developer experience.
          </li>
          </ul>
        </Job>
        <Job>
          <JobHeader>
            <JobTitle>Sr. Site Reliability Engineer, DeepIntent (Remote)</JobTitle>
            <JobDates>September 2021 — September 2024</JobDates>
          </JobHeader>
          <ul>
          <li>
            Worked throughout SDLC of 35+ microservices: building, packaging, and deploying Java/Python applications to Kubernetes
            and UI applications on AWS CDN.
          </li>
          <li>Set up CI/CD for application deployment using GitOps processes.</li>
          <li>
            Managed infrastructure spanning cloud and on-prem; set up monitoring and alerting to prevent downtime by proactively
            solving issues.
          </li>
          <li>
            Set up and configured platform data sources and developer tooling including Airflow, Redis, MySQL, Airbyte, and Vault.
          </li>
          <li>
            Drove fast incident resolution to keep releases unblocked and delivered on time while maintaining minimal production downtime.
          </li>
          <li>
            Explored and performed POCs for new tools to improve stability and observability; built solutions/products to improve release
            cycle time and cross-team collaboration.
          </li>
          <li>Go-to person for troubleshooting and platform reliability across teams.</li>
          </ul>
        </Job>
        <Job>
          <JobHeader>
            <JobTitle>DCO Tech Intern, Amazon Web Services, Mumbai</JobTitle>
            <JobDates>June 2020 — May 2021</JobDates>
          </JobHeader>
          <ul>
          <li>Worked on large scale datacenter operations with ~18,000 servers; performed hardware break/fix and deep-dived issues across server types.</li>
          <li>Worked with routers, switches, and link troubleshooting in complex multi-tier networks; installed and commissioned new server and network racks.</li>
          <li>Worked in shifts with strict adherence to health and safety standards; collaborated with teams to resolve a variety of hardware and network issues.</li>
          </ul>
        </Job>
      </SectionCard>
    </EmploymentContainer>
  );
};

export default EmploymentHistory;

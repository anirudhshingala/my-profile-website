import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const AwardsContainer = styled.section`
  padding: 0;
`;

const Awards = () => {
  return (
    <AwardsContainer>
      <SectionCard>
        <SectionTitle>Awards & Recognition</SectionTitle>
        <ul>
          <li>
            Superhero Awards, DeepIntent (2024) — Awarded for implementing the Dynamic Env project successfully:
            one-click creation and one-click deletion of environments where developers can test and deploy applications
            before release; now used across engineering teams and product owners.
          </li>
          <li>
            Super Hero, DeepIntent (2023) — Recognized for exceptional contribution to the SRE team, automation,
            and handling parallel troubleshooting requests.
          </li>
        </ul>
      </SectionCard>
    </AwardsContainer>
  );
};

export default Awards;

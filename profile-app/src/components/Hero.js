import React from 'react';
import styled from 'styled-components';
import { Container } from './Section';

const Wrap = styled.header`
  padding: 68px 0 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  line-height: 1.05;
  font-weight: 900;
  margin-bottom: 14px;

  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  max-width: 62ch;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
  flex-wrap: wrap;
`;

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary2});
  color: #06101a;
  font-weight: 800;
  border: 0;

  &:hover {
    text-decoration: none;
    filter: brightness(1.05);
  }
`;

const Secondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;

  &:hover {
    text-decoration: none;
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;

const InfoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px;
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
`;

const Avatar = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 999px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 0 0 6px rgba(110, 231, 255, 0.08), 0 18px 40px rgba(0, 0, 0, 0.45);
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 0;
  }
`;

const Label = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
`;

const Value = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
`;

const Hero = () => {
  return (
    <Wrap id="home">
      <Container>
        <Grid>
          <div>
            <Title>Platform Engineer / SRE building reliable systems and automation.</Title>
            <Subtitle>
              Based in Mumbai, India. 5+ years across SRE, DevOps, CI/CD, and infrastructure automation.
              I design platform tooling from scratch, optimize delivery systems, and ship practical solutions fast.
            </Subtitle>
            <Actions>
              <Primary href="#experience">View Experience</Primary>
              <Secondary href="#skills">Skills & Tooling</Secondary>
              <Secondary href="#contact">Contact</Secondary>
            </Actions>
          </div>
          <InfoCard>
            <AvatarWrap>
              <Avatar src={`${process.env.PUBLIC_URL}/profile.png`} alt="Anirudh Shingala" />
            </AvatarWrap>
            <InfoRow>
              <Label>Location</Label>
              <Value>Mumbai, India</Value>
            </InfoRow>
            <InfoRow>
              <Label>Phone</Label>
              <Value>+91 9987732177</Value>
            </InfoRow>
            <InfoRow>
              <Label>Email</Label>
              <Value>shingalaanirudh07@gmail.com</Value>
            </InfoRow>
          </InfoCard>
        </Grid>
      </Container>
    </Wrap>
  );
};

export default Hero;

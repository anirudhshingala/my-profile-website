import React from 'react';
import styled from 'styled-components';
import { SectionCard, SectionTitle } from './Section';

const FooterContainer = styled.footer`
  padding: 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
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

const ValueRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 13px;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    text-decoration: none;
  }
`;

const Footer = () => {
  const email = 'shingalaanirudh07@gmail.com';
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const el = document.createElement('textarea');
        el.value = email;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // no-op
    }
  };

  return (
    <FooterContainer>
      <SectionCard>
        <SectionTitle>Contact</SectionTitle>
        <ContactGrid>
          <div>
            <ContactRow>
              <Label>Location</Label>
              <Value>Mumbai, India</Value>
            </ContactRow>
            <ContactRow>
              <Label>Phone</Label>
              <Value>+91 9987732177</Value>
            </ContactRow>
            <ContactRow>
              <Label>Email</Label>
              <Value>
                <ValueRow>
                  <span>{email}</span>
                  <CopyButton type="button" onClick={copyEmail}>{copied ? 'Copied' : 'Copy'}</CopyButton>
                </ValueRow>
              </Value>
            </ContactRow>
          </div>
          <div>
            <Label style={{ marginBottom: 10 }}>Links</Label>
            <Links>
              <LinkButton href="https://www.linkedin.com/in/anirudhshingala" target="_blank" rel="noopener noreferrer">LinkedIn</LinkButton>
              <LinkButton href="https://github.com/anirudhshingala" target="_blank" rel="noopener noreferrer">GitHub</LinkButton>
              <LinkButton href="https://medium.com/@shingalaanirudh" target="_blank" rel="noopener noreferrer">Medium</LinkButton>
            </Links>
          </div>
        </ContactGrid>
      </SectionCard>
    </FooterContainer>
  );
};

export default Footer;

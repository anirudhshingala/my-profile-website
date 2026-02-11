import React from 'react';
import styled from 'styled-components';
import { Container } from './Section';

const NavWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 18, 32, 0.72);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(12px);
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
`;

const Brand = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  letter-spacing: -0.03em;
  text-decoration: none;
`;

const Links = styled.nav`
  display: flex;
  gap: 16px;

  @media (max-width: 720px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <NavWrap>
      <Container>
        <NavInner>
          <Brand href="#home">Anirudh Shingala</Brand>
          <Links>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#awards">Awards</NavLink>
            <NavLink href="#blogs">Blogs</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Links>
          <Right>
            <Button href="https://www.linkedin.com/in/anirudhshingala" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
            <Button href="https://github.com/anirudhshingala" target="_blank" rel="noopener noreferrer">GitHub</Button>
          </Right>
        </NavInner>
      </Container>
    </NavWrap>
  );
};

export default Navbar;

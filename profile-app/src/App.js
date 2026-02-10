import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import EmploymentHistory from './components/EmploymentHistory';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Footer from './components/Footer';
import { Container, Section } from './components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Container>
        <Section id="about">
          <Profile />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <EmploymentHistory />
        </Section>

        <Section id="education">
          <Education />
        </Section>

        <Section id="certifications">
          <Certifications />
        </Section>

        <Section id="awards">
          <Awards />
        </Section>

        <Section id="contact">
          <Footer />
        </Section>
      </Container>
    </div>
  );
}

export default App;

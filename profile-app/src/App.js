import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import EmploymentHistory from './components/EmploymentHistory';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Profile />
      <Skills />
      <EmploymentHistory />
      <Education />
      <Certifications />
      <Awards />
      <Footer />
    </AppContainer>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Connect with me on{' '}
        <a href="https://www.linkedin.com/in/anirudhshingala" target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
        and{' '}
        <a href="https://medium.com/@shingalaanirudh" target="_blank" rel="noopener noreferrer">Medium</a>.
      </p>
    </FooterContainer>
  );
};

export default Footer;

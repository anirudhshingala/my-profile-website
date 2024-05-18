import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <h1 style={{ color: 'white' }}>Anirudh Shingala</h1>
      <ContactInfo>
        <p>Mumbai, India</p>
        <p>9987732177</p>
        <p>shingalaanirudh07@gmail.com</p>
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header;

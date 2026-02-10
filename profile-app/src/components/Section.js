import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 18px;
`;

export const Section = styled.section`
  padding: 56px 0;
`;

export const SectionCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 22px;
  box-shadow: ${({ theme }) => theme.shadow.card};
  backdrop-filter: blur(10px);
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
`;

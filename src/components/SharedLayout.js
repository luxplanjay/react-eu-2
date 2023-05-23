import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SharedLayout = () => {
  return (
    <PageContainer>
      <AppBar />
      <Outlet />
    </PageContainer>
  );
};

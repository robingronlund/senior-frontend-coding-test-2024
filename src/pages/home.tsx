import { Outlet } from 'react-router';
import { MainLayout } from '../layout/main-layout';

export const Home = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

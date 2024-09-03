import { Outlet } from 'react-router-dom';

import { Header } from '@components/header';

export const RootLayout = () => {
  return (
    <div className="w-full xl:max-w-6xl mx-auto border">
      <Header />

      <main className="px-2">
        <Outlet />
      </main>
    </div>
  );
};

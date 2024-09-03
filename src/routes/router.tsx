import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RootLayout } from './root-layout';
import { UserList, PostList } from '@components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" replace={true} />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
      {
        path: 'posts',
        element: <PostList />,
      },
    ],
  },
]);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Home, { homeLoader } from './routes/Home.tsx';
import PostDetails from './routes/PostDetails.tsx';
import Posts, { postsLoader } from './routes/Posts.tsx';
import Register from './routes/Register.tsx';
import Root from './routes/Root.tsx';
import UserDetails from './routes/UserDetails.tsx';
import Users, { usersLoader } from './routes/Users.tsx';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />,
      },
      {
        path: '/home',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/users',
        children: [
          {
            index: true,
            element: <Users />,
            loader: usersLoader,
          },
          {
            path: ':userId',
            element: <UserDetails />,
          },
        ],
      },
      {
        path: '/posts',
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            element: <PostDetails />,
          },
        ],
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

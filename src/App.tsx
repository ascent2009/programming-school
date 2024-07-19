import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import StartPage from './components/pages/StartPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ErrorPage from './components/pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <StartPage />
          },
          {
            path: 'main',
            element: <MainPage />
          },
          {
            path: '*',
            element: <NotFoundPage />
          }
        ]
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;

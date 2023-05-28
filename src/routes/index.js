import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

export default function ThemeRoutes() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'color',
          element: <Color />
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'shadow',
          element: <Shadow />
        },
        {
          path: 'typography',
          element: <Typography />
        },
        {
          path: 'icons/ant',
          element: <AntIcons />
        }
      ]
    },
    {
      path: '/',
      element: <MinimalLayout />,
      children: [
        {
          path: '/',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        }
      ]
    }
  ]);
}

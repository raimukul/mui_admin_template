import { useRoutes, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// Custom route guard for protected routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = /* Your authentication logic here */ true;

  return isAuthenticated ? (
    <Routes>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </Routes>
  ) : (
    <Navigate to="/" replace />
  );
};

export default function ThemeRoutes() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/dashboard',
          element: <PrivateRoute component={DashboardDefault} />
        },
        {
          path: '/color',
          element: <PrivateRoute component={Color} />
        },
        {
          path: 'sample-page/*',
          element: <PrivateRoute component={SamplePage} />
        },
        {
          path: 'shadow/*',
          element: <PrivateRoute component={Shadow} />
        },
        {
          path: 'typography/*',
          element: <PrivateRoute component={Typography} />
        },
        {
          path: 'icons/ant/*',
          element: <PrivateRoute component={AntIcons} />
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

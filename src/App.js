import { lazy } from 'react';
const Dashboard = Loadable(lazy(() => import('pages/dashboard/index')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
import { Routes, Route } from 'react-router-dom';
import ThemeCustomization from 'themes';
import MainLayout from 'layout/MainLayout/index';
import ScrollTop from 'components/ScrollTop';
import Loadable from 'components/Loadable';

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/color" element={<Color />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/sample-page" element={<SamplePage />} />
          <Route path="/icons/ant" element={<AntIcons />} />
        </Route>
      </Routes>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;

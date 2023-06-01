import { createContext, useReducer, useState, lazy } from 'react';
const Dashboard = Loadable(lazy(() => import('pages/dashboard/index')));
const Login = Loadable(lazy(() => import('pages/authentication/Login')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
import ProtectedRoute from 'ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import ThemeCustomization from 'themes';
import MainLayout from 'layout/MainLayout/index';
import ScrollTop from 'components/ScrollTop';
import Loadable from 'components/Loadable';
export const userData = createContext(null);
const ViewProfile = Loadable(lazy(() => import('pages/profile/ViewProfile')));
const EditProfile = Loadable(lazy(() => import('pages/profile/EditProfile')));
const AddJob = Loadable(lazy(() => import('pages/jobs/AddJob')));
const ViewJobs = Loadable(lazy(() => import('pages/jobs/ViewJobs')));

export default function App() {
  const data = localStorage.getItem('ezy_employee_userdata');
  const usertoken = localStorage.getItem('ezy_employee_token');
  const userObj = JSON.parse(data) || null;
  const [userDetails, setUserDetails] = useState(userObj);
  const [token, setToken] = useState(usertoken || '');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        // console.log(action.payload.data);
        // console.log(action.payload.token);
        setUserDetails(action.payload.data);
        setToken(action.payload.token);
        break;
      case 'LOGOUT':
        localStorage.clear();
        setToken(null);
        break;
      default:
        return state;
    }
  };

  // console.log(userDetails,token);
  console.log(token);

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, null);
  return (
    <div>
      <userData.Provider value={{ userDetails, token, dispatch }}>
        <ThemeCustomization>
          <ScrollTop>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/view-profile" element={<ViewProfile />} />
                  <Route path="/edit-profile" element={<EditProfile />} />
                  <Route path="/add-job" element={<AddJob />} />
                  <Route path="/view-jobs" element={<ViewJobs />} />
                  <Route path="/typography" element={<Typography />} />
                  <Route path="/color" element={<Color />} />
                  <Route path="/shadow" element={<Shadow />} />
                  <Route path="/sample-page" element={<SamplePage />} />
                  <Route path="/icons/ant" element={<AntIcons />} />
                </Route>
              </Route>
            </Routes>
          </ScrollTop>
        </ThemeCustomization>
      </userData.Provider>
    </div>
  );
}

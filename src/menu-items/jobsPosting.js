import { ApartmentOutlined, GlobalOutlined, SolutionOutlined } from '@ant-design/icons';
const icons = {
  ApartmentOutlined,
  GlobalOutlined,
  SolutionOutlined
};

const jobsPosting = {
  id: 'jobsPosting',
  title: 'Jobs',
  type: 'group',
  children: [
    {
      id: 'client-home',
      title: 'Add Position',
      type: 'item',
      url: '/add-job',
      icon: icons.ApartmentOutlined,
      target: false,
      breadcrumbs: true
    },
    {
      id: 'client-application',
      title: 'View Positions',
      type: 'item',
      url: '/view-jobs',
      icon: icons.SolutionOutlined,
      target: false,
      breadcrumbs: true
    }
  ]
};

export default jobsPosting;

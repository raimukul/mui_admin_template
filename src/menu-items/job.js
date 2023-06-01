import { ApartmentOutlined, SolutionOutlined } from '@ant-design/icons';
const icons = {
  ApartmentOutlined,
  SolutionOutlined
};

const job = {
  id: 'job',
  title: 'Job Section',
  type: 'group',
  children: [
    {
      id: 'job-home',
      title: 'Add Job',
      type: 'item',
      url: '/add-job',
      icon: icons.ApartmentOutlined,
      target: false,
      breadcrumbs: true
    },
    {
      id: 'view-job',
      title: 'View Jobs',
      type: 'item',
      url: '/view-jobs',
      icon: icons.SolutionOutlined,
      target: false,
      breadcrumbs: true
    }
  ]
};

export default job;

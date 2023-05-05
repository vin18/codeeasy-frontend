import { createBrowserRouter } from 'react-router-dom';
import CourseDetailPage from '../pages/CourseDetailPage';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'courses/:courseId', element: <CourseDetailPage /> },
    ],
  },
]);

export default router;

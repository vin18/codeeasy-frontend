import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;

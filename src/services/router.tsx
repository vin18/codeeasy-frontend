import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Product from '../pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products/:slug', element: <Product /> },
    ],
  },
]);

export default router;

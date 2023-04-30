import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

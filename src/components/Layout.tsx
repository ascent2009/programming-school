import { Box, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  const { colorMode } = useColorMode();
  const bgRoot = colorMode === 'light' ? '#eaf2f5' : '';
  return (
    <Box bg={bgRoot}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;

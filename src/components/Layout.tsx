import { Box, useColorMode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';

const Layout = () => {
  const { colorMode } = useColorMode();
  const bgRoot = colorMode === 'light' ? '#eaf2f5' : '';
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box bg={bgRoot}>
        <Header />
        <Outlet />
      </Box>
    </ChakraProvider>
  );
};

export default Layout;

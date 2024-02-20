import { Box, useColorMode } from '@chakra-ui/react';
import StartPage from './pages/StartPage';
import Header from './Header/Header';
import Auth from './Auth';

const Overlay = () => {
  const { colorMode } = useColorMode();
  const bgRoot = colorMode === 'light' ? '#eaf2f5' : '';
  return (
    <Box bg={bgRoot}>
      <Header />
      <Auth />
      <StartPage />
    </Box>
  );
};

export default Overlay;

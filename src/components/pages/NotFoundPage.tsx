import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export default function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate(-1), 2000);
  });
  return (
    <Box
      as="section"
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m="auto"
      mt={[100, 100, 100, 100]}
      color="red"
      fontSize={['4rem', '4rem', '4rem', '10rem']}
      flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
      textAlign="center">
      404 NotFoundPage
    </Box>
  );
}

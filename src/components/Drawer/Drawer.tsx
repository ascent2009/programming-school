import { memo } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Button,
  VStack,
  Box,
  Link as ChakraLink,
  useColorMode
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { MenuConfig } from '../Header/config';

interface Drawer {
  isOpenDrawer: boolean;
  onCloseDrawer: () => void;
  user: string;
  onLogin: (id: string) => void;
}

const DrawerMobile: React.FC<Drawer> = ({ isOpenDrawer, onCloseDrawer, user, onLogin }) => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? '#22253B' : '#F15525';
  const bg = colorMode === 'light' ? '#38BFF2' : '#F15525';

  return (
    <Drawer isOpen={isOpenDrawer} placement="right" onClose={onCloseDrawer}>
      <DrawerOverlay />
      <DrawerContent
        borderRadius={15}
        m={[7, 5, 10, 'auto']}
        display={['flex', 'flex', 'flex', 'none']}>
        <DrawerCloseButton />
        <DrawerBody m="53px auto auto">
          <VStack color={color} fontSize={20} spacing={4} display="flex" alignItems="left">
            {MenuConfig.map(({ href, text }) => (
              <Box key={text}>
                <ChakraLink
                  as={ReactRouterLink}
                  to={href}
                  _hover={{ transition: '0.5s', transform: 'scale(1.1)' }}>
                  {text}
                </ChakraLink>
              </Box>
            ))}
            {!user ? (
              <Button
                onClick={(id) => {
                  onLogin(id);
                  onCloseDrawer();
                }}
                appearance="none"
                color={color}
                fontSize={20}
                bg="transparent"
                p={0}
                fontWeight={400}
                justifyContent="left"
                height="auto"
                lineHeight={1.7}>
                Регистрация
              </Button>
            ) : null}
          </VStack>
        </DrawerBody>

        <DrawerFooter m="auto auto 34px 31px">
          {!user ? (
            <Button
              bg={bg}
              borderRadius="full"
              ml={0}
              color="#FFFFFF"
              fontSize={15}
              fontWeight="normal"
              p="18px 30px"
              cursor="pointer"
              onClick={(id) => {
                onLogin(id);
                onCloseDrawer();
              }}
              _hover={{
                transition: '0.5s'
              }}>
              <ArrowForwardIcon mr={2} /> Войти
            </Button>
          ) : null}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default memo(DrawerMobile);

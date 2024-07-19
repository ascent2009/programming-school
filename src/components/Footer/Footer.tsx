import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  List,
  ListItem,
  useColorMode,
  Text,
  Stack
} from '@chakra-ui/react';
import LogoSvg from '../../assets/logo.svg';
import SocialsIcons from '../SocialsIcons';
import { MenuConfig } from '../pages/config';

function Footer() {
  const { colorMode } = useColorMode();
  console.log(JSON.parse(localStorage.user).length);
  const color = colorMode === 'light' ? '#22253B' : '#F15525';
  return (
    <Box as="footer" fontFamily="Gilroy-Regular" mt="2rem">
      <Flex
        as="section"
        w="87%"
        pb={['2rem', '2rem', '2rem', '3.3rem']}
        mx="auto"
        bg="transparent"
        justify={['center', 'center', 'center', 'space-between']}
        borderBottom="1px solid #D8D8D8"
        gap={[43, 43, 43, '14rem']}
        direction={['column', 'column', 'column', 'row']}>
        <Flex
          justify="space-between"
          grow={1}
          direction={['column', 'column', 'column', 'row']}
          mx="auto"
          w={['80%', '80%', '80%', 'auto']}>
          <Flex direction="column">
            <Flex
              gap="1.1rem"
              justify={['space-around', 'space-around', 'space-around', 'flex-start']}>
              <Image src={LogoSvg} alt="logo" w={87} />
              <Text w="9.5rem" color="#8E8E8E">
                Школа программирования
              </Text>
            </Flex>

            <SocialsIcons width="30rem" />
          </Flex>
          <List
            bg="transparent"
            w="fit-content"
            display="flex"
            spacing={25}
            color={color}
            flexDirection="column"
            fontSize={13}
            mx={['auto', 'auto', 'auto', 0]}
            mt={[7, 7, 7, 0]}>
            {MenuConfig.map(({ href, text }) => (
              <ListItem
                key={text}
                _hover={{
                  transition: '0.5s',
                  transform: 'scale(1.2) translate(10px)'
                }}
                _last={{ display: JSON.parse(localStorage.user).length ? 'none' : 'block' }}>
                <ChakraLink as={ReactRouterLink} to={href}>
                  <Text align={['center', 'center', 'center', 'left']}>{text}</Text>
                </ChakraLink>
              </ListItem>
            ))}
          </List>
        </Flex>
        <Flex
          direction="column"
          justify={['flex-start', 'flex-start', 'flex-start', 'space-between']}
          mx="auto"
          gap={['2rem', '2rem', '2rem', 0]}>
          <Stack spacing={[1, 1, 1, 'auto']}>
            <ChakraLink as={ReactRouterLink} to="tel:+74993489396" color="#38BFF2">
              <Text align={['center', 'center', 'center', 'left']}>+7 (499) 348 93 96</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="mailto:info@ytyt.ru">
              <Text align={['center', 'center', 'center', 'left']}>info@ytyt.ru</Text>
            </ChakraLink>
          </Stack>
          <Stack color="#8E8E8E" fontSize={13}>
            <Text align={['center', 'center', 'center', 'left']}>ИП Умаров Т. А.</Text>
            <Text align={['center', 'center', 'center', 'left']}>ИНН 745216229809</Text>
            <Text align={['center', 'center', 'center', 'left']}>ОГРНИП 315745200001358</Text>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        as="section"
        w="87%"
        pb="2rem"
        mt="1.8rem"
        mx="auto"
        bg="transparent"
        justify="space-between"
        align="center"
        gap={['6px', '6px', '6px', '4rem']}
        fontSize={[12, 12, 12, '1rem']}
        color="#8E8E8E"
        direction={['column', 'column', 'column', 'row']}>
        <Flex
          justify="space-between"
          grow={1}
          direction={['column', 'column', 'column', 'row']}
          gap={['10px', '10px', '10px', 0]}
          align="center">
          <Text>© 2022 ytyt — Все права защищены</Text>
          <ChakraLink as={ReactRouterLink} to="#" _hover={{ color: color }}>
            Пользовательское соглашение
          </ChakraLink>
        </Flex>
        <Flex w="fit-content">
          <ChakraLink as={ReactRouterLink} to="#" _hover={{ color: color }}>
            Политика конфиденциальности
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;

import {
  Box,
  Flex,
  Image,
  Link,
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
    <Box as="footer" fontFamily="Gilroy-Regular">
      <Flex
        as="section"
        w="87%"
        pb="3.3rem"
        mx="auto"
        bg="transparent"
        justify="space-between"
        borderBottom="1px solid #D8D8D8"
        gap="14rem">
        <Flex justify="space-between" grow={1}>
          <Flex direction="column">
            <Flex gap="1.1rem">
              <Image src={LogoSvg} alt="logo" />
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
            fontSize={13}>
            {MenuConfig.map(({ href, text }) => (
              <ListItem
                key={text}
                _hover={{
                  transition: '0.5s',
                  transform: 'scale(1.2) translate(10px)'
                }}
                _last={{ display: JSON.parse(localStorage.user).length ? 'none' : 'block' }}>
                <Link href={href}>{text}</Link>
              </ListItem>
            ))}
          </List>
        </Flex>
        <Flex direction="column" justify="space-between">
          <Stack>
            <Link href="tel:+74993489396" color="#38BFF2">
              +7 (499) 348 93 96
            </Link>
            <Link href="mailto:info@ytyt.ru">info@ytyt.ru</Link>
          </Stack>
          <Stack color="#8E8E8E" fontSize={13}>
            <Text>ИП Умаров Т. А.</Text>
            <Text>ИНН 745216229809</Text>
            <Text>ОГРНИП 315745200001358</Text>
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
        gap="4rem"
        fontSize="1rem"
        color="#8E8E8E">
        <Flex justify="space-between" grow={1}>
          <Text>© 2022 ytyt — Все права защищены</Text>
          <Link href="#">Пользовательское соглашение</Link>
        </Flex>
        <Flex w="fit-content">
          <Link href="#">Политика конфиденциальности</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;

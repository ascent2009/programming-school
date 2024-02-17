import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  ButtonGroup,
  Button,
  useColorMode,
  FormControl,
  FormLabel,
  Switch,
  Stack
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import LogoSvg from '../../assets/logo.svg';
import { MenuConfig, ButtonGroupConfig } from './config';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgRoot = colorMode === 'light' ? '#eaf2f5' : '';
  const bg = colorMode === 'light' ? '#38BFF2' : '#F15525';
  const color = colorMode === 'light' ? '#22253B' : '#F15525';
  const checked = colorMode === 'light' ? false : true;
  const colorBorderSwitch = colorMode === 'light' ? '#eaf2f5' : '#ffffff';
  const opacityLight = colorMode === 'light' ? '0.3' : '1';
  const opacityDark = colorMode === 'light' ? '1' : '0.3';

  return (
    <Box as="header" fontFamily="Gilroy-Regular" bg={bgRoot}>
      <Stack
        as="section"
        direction="row"
        w="87%"
        display="flex"
        mx="auto"
        align="center"
        justify="space-between"
        spacing={8}>
        <Flex
          fontSize={13}
          // color="#22253B"
          w="92%"
          bg="white"
          m=" 57px auto 22px"
          borderRadius="full"
          align="center"
          justify="space-between">
          <Box p="16px 21px" bg="transparent" borderRadius="full">
            <Image src={LogoSvg} alt="logo" />
          </Box>

          <Breadcrumb
            separator=" "
            bg="transparent"
            w="43%"
            display="flex"
            ml={50}
            spacing={9}
            flex="1"
            color={color}>
            {MenuConfig.map(({ href, text }) => (
              <BreadcrumbItem key={text}>
                <BreadcrumbLink
                  href={href}
                  _hover={{ transition: '0.5s', transform: 'scale(1.1)' }}>
                  {text}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <ButtonGroup bg="transparent" mr={11}>
            {ButtonGroupConfig.map(({ icon, text }) => (
              <Button
                key={text}
                bg="transparent"
                borderRadius="full"
                // color="#22253B"
                color={color}
                fontSize={13}
                fontWeight="normal"
                p="8.87px 14.95px"
                cursor="pointer"
                _hover={{ bg: bg, color: '#FFFFFF', transition: '0.5s' }}>
                {icon}
                {text}
              </Button>
            ))}
          </ButtonGroup>
        </Flex>

        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="6%"
          mt={35}>
          <FormLabel htmlFor="light" title="Дневной режим" m={0}>
            <SunIcon color="#38BFF2" opacity={opacityLight} />
          </FormLabel>
          <Switch
            onChange={toggleColorMode}
            border="2px solid"
            borderColor={colorBorderSwitch}
            borderRadius="full"
            colorScheme="black"
            isChecked={checked}
          />
          <FormLabel htmlFor="dark" title="Ночной режим" m={0}>
            <MoonIcon color="#F15525" opacity={opacityDark} />
          </FormLabel>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Header;

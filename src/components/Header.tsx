import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  ButtonGroup,
  Button
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import LogoSvg from '../assets/logo.svg';

const Header = () => (
  <Box as="header" fontFamily="Gilroy-Regular">
    <Flex
      fontSize={13}
      color="#22253B"
      w="87%"
      /*minHeight="51px"*/ bg="white"
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
        flex="1">
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Чему вы научитесь</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Процесс обучения</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Стоимость</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Контакты</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ButtonGroup bg="transparent" mr={11}>
        <Button
          bg="transparent"
          borderRadius="full"
          fontSize={13}
          fontWeight="normal"
          p="8.87px 14.95px"
          cursor="pointer"
          _hover={{ bg: '#38BFF2', color: '#FFFFFF', transition: '0.5s' }}>
          Регистрация
        </Button>
        <Button
          bg="transparent"
          borderRadius="full"
          fontSize={13}
          fontWeight="normal"
          p="8.87px 14.95px"
          cursor="pointer"
          _hover={{ bg: '#38BFF2', color: '#FFFFFF', transition: '0.5s' }}>
          <ArrowForwardIcon bg="transparent" mr={1} />
          Войти
        </Button>
      </ButtonGroup>
    </Flex>
    <Flex
      fontSize={13}
      color="#22253B"
      maxWidth="87%"
      /*minHeight="51px"*/ bg="white"
      m=" 0 auto 22px"
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
        color="#F15525">
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Чему вы научитесь</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Процесс обучения</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Стоимость</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Контакты</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ButtonGroup bg="transparent" mr={11}>
        <Button
          bg="transparent"
          borderRadius="full"
          fontSize={13}
          fontWeight="normal"
          p="8.87px 14.95px"
          cursor="pointer"
          _hover={{ bg: '#F15525', color: '#FFFFFF', transition: '0.5s' }}
          color="#F15525">
          Регистрация
        </Button>
        <Button
          bg="transparent"
          borderRadius="full"
          fontSize={13}
          fontWeight="normal"
          p="8.87px 14.95px"
          cursor="pointer"
          _hover={{ bg: '#F15525', color: '#FFFFFF', transition: '0.5s' }}
          color="#F15525">
          <ArrowForwardIcon bg="transparent" mr={1} />
          Войти
        </Button>
      </ButtonGroup>
    </Flex>
  </Box>
);

export default Header;

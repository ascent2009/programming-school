import { useState, useEffect, useCallback, memo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Icon,
  ButtonGroup,
  Button,
  useColorMode,
  FormControl,
  FormLabel,
  Switch,
  Stack,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormErrorMessage
} from '@chakra-ui/react';

import { SunIcon, MoonIcon, ViewIcon } from '@chakra-ui/icons';
import { LuLogOut } from 'react-icons/lu';

import LogoSvg from '../../assets/logo.svg';
import { MenuConfig, ButtonGroupConfig } from './config';

interface IModal {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type Login = Omit<IModal, 'firstName' | 'lastName'>;

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<IModal>();
  const navigate = useNavigate();

  const bgRoot = colorMode === 'light' ? '#eaf2f5' : '';
  const bgModal = colorMode === 'light' ? '#eaf2f5' : 'gray.700';
  const bg = colorMode === 'light' ? '#38BFF2' : '#F15525';
  const color = colorMode === 'light' ? '#22253B' : '#F15525';
  const checked = colorMode === 'light' ? false : true;
  const colorBorderSwitch = colorMode === 'light' ? '#eaf2f5' : '#ffffff';
  const opacityLight = colorMode === 'light' ? '0.3' : '1';
  const opacityDark = colorMode === 'light' ? '1' : '0.3';

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [registered, setRegistered] = useState<IModal[]>(
    JSON.parse(localStorage.getItem('register') as string) || []
  );
  const [user, setUser] = useState<IModal['email']>(
    JSON.parse(localStorage.getItem('user') as string) || ''
  );
  const [alert, setAlert] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('register', JSON.stringify(registered));
    localStorage.setItem('user', JSON.stringify(user));
  }, [registered, user]);

  const onSubmit: SubmitHandler<IModal> = useCallback(
    (data) => {
      setAlert(null);
      const search = (source: IModal[], data: IModal) => {
        let found = false;
        source.forEach((s) => {
          if (s['email'] === data['email']) {
            found = true;
          }
        });
        return found;
      };
      if (search(registered, data)) {
        setAlert('Пользователь с таким e-mail уже зарегистрирован!');
      } else {
        setRegistered([...registered, data]);
        // localStorage.setItem('register', JSON.stringify(registered));
        reset(defaultValues);
        setTimeout(() => {
          onClose();
          setIsLogin(false);
        }, 1000);
        setAlert('Пользователь зарегистрирован!');
      }
      // console.log(JSON.stringify(registered, null, 2));
      console.log(registered);
    },
    [onClose, registered, reset]
  );

  const onSubmitLogin: SubmitHandler<Login> = useCallback(
    (res) => {
      setAlert(null);
      const search = (source: IModal[], result: Login) => {
        let found = false;
        source.forEach((s) => {
          if (s['email'] === result['email'] && s['password'] === result['password']) {
            found = true;
          }
        });
        return found;
      };
      if (search(registered, res)) {
        setAlert('Вход успешен!');
        reset();
        setTimeout(() => {
          onClose();
          setIsLogin(false);
          setUser(res['email']);
          navigate(`/${user}`);
          window.location.reload();
        }, 1000);
      } else {
        setAlert('Неверный логин или пароль');
      }
    },
    [onClose, registered, reset]
  );

  const onCloseModal = () => {
    reset(defaultValues);
    setAlert(null);
    setTimeout(() => {
      onClose();
      setIsLogin(false);
    }, 500);
  };

  const onLogin = (id: string) => {
    if (id === 'login') {
      setIsLogin(true);
    }
    // console.log(isLogin, id);
    onOpen();
    setAlert(null);
  };

  const onLogout = () => {
    setUser('');
  };

  const toggleForms = () => {
    setIsLogin(!isLogin);
    setAlert(null);
  };

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
          {user ? (
            <ButtonGroup bg="transparent" mr={11}>
              <Button color={color} bg="transparent" borderRadius="full">
                {user}
              </Button>
              <Button
                onClick={onLogout}
                color={color}
                bg="transparent"
                borderRadius="full"
                title="Выйти из профиля">
                <Icon as={LuLogOut} />
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup bg="transparent" mr={11}>
              {ButtonGroupConfig.map(({ icon, text, id }) => (
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
                  onClick={() => onLogin(id)}
                  _hover={{ bg: bg, color: '#FFFFFF', transition: '0.5s' }}>
                  {icon}
                  {text}
                </Button>
              ))}
            </ButtonGroup>
          )}
        </Flex>

        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          maxW="6%"
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
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        // size="lg"
      >
        <ModalOverlay />
        <ModalContent
          fontFamily="Gilroy-Regular"
          bg={bgModal}
          as="form"
          onSubmit={handleSubmit(!isLogin ? onSubmit : onSubmitLogin)}>
          <ModalHeader>{!isLogin ? 'Создать учетную запись' : 'Войти в профиль'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl
              isInvalid={false}
              isRequired={!isLogin ? true : false}
              display={!isLogin ? '' : 'none'}>
              <FormLabel htmlFor="firstName">Имя</FormLabel>
              <Input
                id="firstName"
                // ref={initialRef}
                type="text"
                placeholder="Имя"
                {...register('firstName', { required: !isLogin ? true : false })}
                // ref={initialRef}
                bg={colorMode === 'light' ? '#ffffff' : 'transparent'}
              />
              <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isInvalid={false}
              isRequired={!isLogin ? true : false}
              display={!isLogin ? '' : 'none'}>
              <FormLabel htmlFor="lastName">Фамилия</FormLabel>
              <Input
                id="lastName"
                type="text"
                placeholder="Фамилия"
                {...register('lastName', { required: !isLogin ? true : false })}
                bg={colorMode === 'light' ? '#ffffff' : 'transparent'}
              />
              <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={false} isRequired>
              <FormLabel htmlFor="email">Электронная почта</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="e-mail"
                {...register('email', { required: true })}
                bg={colorMode === 'light' ? '#ffffff' : 'transparent'}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={false} isRequired>
              <FormLabel htmlFor="password">Пароль</FormLabel>
              <HStack>
                <Input
                  id="password"
                  type={isVisible ? 'text' : 'password'}
                  placeholder="пароль"
                  {...register('password', { required: true })}
                  bg={colorMode === 'light' ? '#ffffff' : 'transparent'}
                  position="relative"
                />

                <ViewIcon
                  position="absolute"
                  cursor="pointer"
                  right={5}
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                />
              </HStack>

              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" gap={10}>
            <Text color={bg} fontWeight={700}>
              {alert}
            </Text>
            <Flex direction="column">
              <Text textAlign="center">
                {!isLogin ? 'Уже есть учетная запись?' : 'Еще нет учетной записи?'}
              </Text>
              <Button
                p={0}
                m={0}
                bg="transparent"
                fontWeight={400}
                _hover={{ color: bg, transition: '0.5s', textDecoration: 'none' }}
                onClick={toggleForms}>
                {!isLogin ? 'Перейдите на окно вxода' : 'Зарегистрируйтесь'}
              </Button>
            </Flex>
            <Flex justify="right">
              <Button colorScheme="blue" mr={3} type="submit" bg={bg} isLoading={isSubmitting}>
                {!isLogin ? 'Зарегистрироваться' : 'Войти'}
              </Button>
              <Button onClick={onCloseModal}>Выйти</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default memo(Header);

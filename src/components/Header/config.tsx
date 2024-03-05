import { ArrowForwardIcon } from '@chakra-ui/icons';

export const MenuConfig = [
  {
    href: 'main',
    text: 'Чему вы научитесь'
  },
  {
    href: '#',
    text: 'Процесс обучения'
  },
  {
    href: '#',
    text: 'Стоимость'
  },
  {
    href: 'main',
    text: 'Контакты'
  }
];

export const ButtonGroupConfig = [
  {
    id: 'register',
    icon: null,
    text: 'Регистрация'
  },
  {
    id: 'login',
    icon: <ArrowForwardIcon bg="transparent" mr={1} />,
    text: 'Войти'
  }
];

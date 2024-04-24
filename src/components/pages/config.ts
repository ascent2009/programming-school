import VKSvg from '../../assets/vkontakte.svg';
import FBSvg from '../../assets/facebook.svg';
import YoutubeSvg from '../../assets/youtube.svg';
import InstagramSvg from '../../assets/instagram.svg';
import ManNotebookPng from '../../assets/man-at-notebook.png';
import HandsPrintPng from '../../assets/printing-hands.png';
import PersonsNotebookPng from '../../assets/two-at-pc.png';
import HandsNotebookPng from '../../assets/hands-on-notebook.png';
import PracticeSvg from '../../assets/practice.svg';
import MethodsSvg from '../../assets/methods.svg';
import PresentationSvg from '../../assets/presentation.svg';
import TimetableSvg from '../../assets/timetable.svg';
import ConnectionSvg from '../../assets/connection.svg';
import PaymentSvg from '../../assets/payment.svg';
import RefundSvg from '../../assets/refund.svg';
import SplitSvg from '../../assets/split.svg';

export const SocialsConfig = [
  {
    src: InstagramSvg,
    alt: 'instagram icon'
  },
  {
    src: VKSvg,
    alt: 'vk icon'
  },
  {
    src: FBSvg,
    alt: 'facebook icon'
  },
  {
    src: YoutubeSvg,
    alt: 'youtube icon'
  }
];

export const MenuConfig = [
  {
    href: '#',
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
    href: '#',
    text: 'Контакты'
  },
  {
    href: '#',
    text: 'Регистрация'
  }
];

export const ImagesConfig = [
  {
    src: ManNotebookPng,
    justifySelf: 'center',
    alt: 'man works on a notebook',
    alignSelf: ''
  },
  {
    src: HandsPrintPng,
    justifySelf: 'center',
    alt: 'printing hands',
    alignSelf: ''
  },
  {
    src: PersonsNotebookPng,
    justifySelf: 'center',
    alt: 'two persons on a laptop',
    alignSelf: 'center'
  },
  {
    src: HandsNotebookPng,
    justifySelf: 'center',
    alt: 'hands on a laptop keyboard',
    alignSelf: ''
  }
];

export const technologiesConfig = [
  {
    title: 'Язык программирования Python',
    bg: '#5096FF'
  },
  {
    title: 'Сети',
    bg: '#FFB359'
  },
  {
    title: 'Базы данных',
    bg: '#FF6F50'
  },
  {
    title: 'Фреймворки Flask и Django',
    bg: '#4BD071'
  },
  {
    title: 'Отладка и тестирование',
    bg: '#50C0FF'
  },
  {
    title: 'Docker',
    bg: '#4B77B9'
  },
  {
    title: 'Git',
    bg: '#AF93FF'
  }
];

export const educationConfig = [
  {
    id: 1,
    src: PracticeSvg,
    title: 'Огромное количество практики',
    text: 'Более 500 самостоятельных заданий и 20 полноценных больших проектов'
  },
  {
    id: 2,
    src: MethodsSvg,
    title: 'Современные методики обучения',
    text: 'Спиральное обучение: погружаемся в материал постепенно, виток за витком'
  },
  {
    id: 3,
    src: PresentationSvg,
    title: 'Простое и понятное изложение',
    text: 'Вместо заумных терминов – примеры из реального мира'
  },
  {
    id: 4,
    src: TimetableSvg,
    title: 'Гибкий график занятий',
    text: 'Учитесь в любое время в удобном для вас темпе'
  },
  {
    id: 5,
    src: ConnectionSvg,
    title: 'Прямая связь с опытными программистами',
    text: 'Задавайте вопросы и отправляйте свой код на проверку'
  },
  {
    id: 6,
    src: PaymentSvg,
    title: 'Оплата небольшими частями',
    text: 'Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу'
  },
  {
    id: 7,
    src: RefundSvg,
    title: 'Быстрый и легкий возврат',
    text: 'Если передумаете учиться – вернем деньги за 3 рабочих дня'
  }
];

export const processConfig = [
  {
    id: '01',
    title: 'Весь материал разбит на небольшие уроки',
    text: 'Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.'
  },
  {
    id: '02',
    title: 'Обучение через практику',
    text: 'Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.'
  },
  {
    id: '03',
    title: 'Нет ограничений по времени',
    text: 'Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.'
  }
];

export const costConfig = [
  {
    id: 1,
    src: SplitSvg,
    text: 'Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.'
  },
  {
    id: 2,
    src: PaymentSvg,
    text: 'Любой из блоков вы можете оплатить в рассрочку'
  },
  {
    id: 3,
    src: RefundSvg,
    text: 'Если передумаете учиться, то возврат можно оформить в любой момент. Возвращаем деньги за 3 рабочих дня.'
  }
];

export const tableConfig = [
  { block: 'Введение в программирование', price: 'Бесплатно', period: 0.5 },
  { block: 'Основы программирования на Python', price: '9 900', period: 1 },
  { block: 'Python, продвинутый уровень', price: '14 900', period: 2.5 },
  { block: 'Сети + фреймворк Flask', price: '14 900', period: 2.5 },
  { block: 'Базы данных', price: '14 900', period: 2 },
  { block: 'Фреймворк Django', price: '14 900', period: 2 },
  { block: 'Разработка «боевого» проекта', price: '9 900', period: 1.5 }
];

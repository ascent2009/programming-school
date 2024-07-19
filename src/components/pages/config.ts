import VKSvg from '../../assets/vkontakte.svg';
import FBSvg from '../../assets/facebook.svg';
import YoutubeSvg from '../../assets/youtube.svg';
import InstagramSvg from '../../assets/instagram.svg';
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
    src: 'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/man-at-notebook.png?alt=media&token=851768ff-13d4-4de7-aab3-84442dfe2d08',
    justifySelf: 'center',
    alt: 'man works on a notebook',
    alignSelf: ''
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/printing-hands.png?alt=media&token=295457aa-f53b-4708-b854-9274446ea733',
    justifySelf: 'center',
    alt: 'printing hands',
    alignSelf: ''
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/two-at-pc.png?alt=media&token=2f111ddc-5de0-4ba9-bd3c-2e9d3f82abc8',
    justifySelf: 'center',
    alt: 'two persons on a laptop',
    alignSelf: 'center'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/hands-on-notebook.png?alt=media&token=3e861401-184e-496a-b3a1-e4cc5fa7906a',
    justifySelf: 'center',
    alt: 'hands on a laptop keyboard',
    alignSelf: ''
  }
];

export const technologiesConfig = [
  {
    title: 'Язык программирования Python',
    bg: '#5096FF',
    spanCol: 'span 3 / 4'
  },
  {
    title: 'Сети',
    bg: '#FFB359',
    spanCol: '1 / 2'
  },
  {
    title: 'Базы данных',
    bg: '#FF6F50',
    spanCol: 'span 2 / 4'
  },
  {
    title: 'Фреймворки Flask и Django',
    bg: '#4BD071',
    spanCol: 'span 3 / 4'
  },
  {
    title: 'Отладка и тестирование',
    bg: '#50C0FF',
    spanCol: 'span 3 / 4'
  },
  {
    title: 'Docker',
    bg: '#4B77B9',
    spanCol: 'span 2 / 3'
  },
  {
    title: 'Git',
    bg: '#AF93FF',
    spanCol: '3 / 4'
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

export const PNGlib = {
  handsNotebook:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/hands-on-notebook.png?alt=media&token=3e861401-184e-496a-b3a1-e4cc5fa7906a',
  handsPrint:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/printing-hands.png?alt=media&token=295457aa-f53b-4708-b854-9274446ea733',
  manNotebook:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/man-at-notebook.png?alt=media&token=851768ff-13d4-4de7-aab3-84442dfe2d08',
  personsNotebook:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/two-at-pc.png?alt=media&token=2f111ddc-5de0-4ba9-bd3c-2e9d3f82abc8',
  circles:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/bg-circles.png?alt=media&token=a058d9b3-d65b-44be-8354-8caf6805b92f',
  circlesInverted:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/bg-circles-inverted.png?alt=media&token=20d78341-6ea6-4e1c-80c4-cf73495b5f92',
  video:
    'https://firebasestorage.googleapis.com/v0/b/programming-school-cf3e0.appspot.com/o/video.png?alt=media&token=6892f04e-d7fa-4656-99d5-e82e8388dfb0'
};

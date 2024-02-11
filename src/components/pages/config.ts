import VKSvg from '../../assets/vkontakte.svg';
import FBSvg from '../../assets/facebook.svg';
import YoutubeSvg from '../../assets/youtube.svg';
import InstagramSvg from '../../assets/instagram.svg';
import ManNotebookPng from '../../assets/man-at-notebook.png';
import HandsPrintPng from '../../assets/printing-hands.png';
import PersonsNotebookPng from '../../assets/two-at-pc.png';
import HandsNotebookPng from '../../assets/hands-on-notebook.png';

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

import { FC } from 'react';
import { Flex, Image, Link, useColorMode } from '@chakra-ui/react';
import YoutubeOrangeSvg from '../assets/youtube-orange.svg';
import InstagramOrangeSvg from '../assets/instagram-orange.svg';
import VKOrangeSvg from '../assets/vkontakte-orange.svg';
import FBOrangeSvg from '../assets/facebook-orange.svg';
import { SocialsConfig } from './pages/config';

interface ISocial {
  width: number | string;
}

const SocialsIcons: FC<ISocial> = ({ width }) => {
  const { colorMode } = useColorMode();

  const darkSocials = colorMode === 'light' ? false : true;

  return (
    <Flex as="section" mt={50} w={width} justify="space-between">
      {!darkSocials ? (
        <Flex w="40%" justify="space-between">
          {SocialsConfig.map(({ src, alt }) => (
            <Link key={alt}>
              <Image src={src} alt={alt} _hover={{ transition: '0.5s', transform: 'scale(1.3)' }} />
            </Link>
          ))}{' '}
        </Flex>
      ) : (
        <Flex w="40%" justify="space-between">
          <Link>
            <Image
              src={InstagramOrangeSvg}
              alt="instagram icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </Link>
          <Link>
            <Image
              src={VKOrangeSvg}
              alt="vk icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </Link>
          <Link>
            <Image
              src={FBOrangeSvg}
              alt="facebook icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </Link>
          <Link>
            <Image
              src={YoutubeOrangeSvg}
              alt="youtube icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default SocialsIcons;

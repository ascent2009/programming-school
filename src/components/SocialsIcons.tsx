import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Flex, Image, Link as ChakraLink, useColorMode } from '@chakra-ui/react';
import YoutubeOrangeSvg from '../assets/youtube-orange.svg';
import InstagramOrangeSvg from '../assets/instagram-orange.svg';
import VKOrangeSvg from '../assets/vkontakte-orange.svg';
import FBOrangeSvg from '../assets/facebook-orange.svg';
import { SocialsConfig } from './pages/config';

interface ISocial {
  width: number | string | string[];
}

const SocialsIcons: FC<ISocial> = ({ width }) => {
  const { colorMode } = useColorMode();

  const darkSocials = colorMode === 'light' ? false : true;

  return (
    <Flex as="section" mt={50} w={width} justify="space-between">
      {!darkSocials ? (
        <Flex w="40%" justify="space-between">
          {SocialsConfig.map(({ src, alt }) => (
            <ChakraLink as={ReactRouterLink} key={alt}>
              <Image src={src} alt={alt} _hover={{ transition: '0.5s', transform: 'scale(1.3)' }} />
            </ChakraLink>
          ))}{' '}
        </Flex>
      ) : (
        <Flex w="40%" justify="space-between">
          <ChakraLink as={ReactRouterLink}>
            <Image
              src={InstagramOrangeSvg}
              alt="instagram icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </ChakraLink>
          <ChakraLink as={ReactRouterLink}>
            <Image
              src={VKOrangeSvg}
              alt="vk icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </ChakraLink>
          <ChakraLink as={ReactRouterLink}>
            <Image
              src={FBOrangeSvg}
              alt="facebook icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </ChakraLink>
          <ChakraLink as={ReactRouterLink}>
            <Image
              src={YoutubeOrangeSvg}
              alt="youtube icon"
              _hover={{ transition: '0.5s', transform: 'scale(1.3)' }}
            />
          </ChakraLink>
        </Flex>
      )}
    </Flex>
  );
};

export default SocialsIcons;

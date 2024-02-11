import { Box, Flex, Text, SimpleGrid, Image, Button, Link, List, ListItem } from '@chakra-ui/react';
import ArrowSvg from '../../assets/diagonal-arrow.svg';
import YoutubeOrangeSvg from '../../assets/youtube-orange.svg';
import InstagramOrangeSvg from '../../assets/instagram-orange.svg';
import VKOrangeSvg from '../../assets/vkontakte-orange.svg';
import FBOrangeSvg from '../../assets/facebook-orange.svg';
import { SocialsConfig, MenuConfig, ImagesConfig } from './config';

const StartPage = () => (
  <Box as="main" w="87%" m="37px auto" fontFamily="Gilroy-Regular">
    <Flex as="section" gap={69}>
      <Button
        bg="#F15525"
        p="35px 41px"
        borderRadius="full"
        fontSize={18}
        fontWeight={400}
        color="#FFFFFF">
        <Text textShadow="0 3px 3px #969696" bg="transparent">
          Пройти тестирование
        </Text>
        <Image src={ArrowSvg} alt="diagonal arrow" ml={3} />
      </Button>
      <Button
        bg="#38BFF2"
        p="35px 41px"
        borderRadius="full"
        fontSize={18}
        fontWeight={400}
        color="#FFFFFF">
        <Text textShadow="0 3px 3px #969696" bg="transparent">
          Пройти тестирование
        </Text>
        <Image src={ArrowSvg} alt="diagonal arrow" ml={3} />
      </Button>
    </Flex>
    <Flex as="section" mt={50} w="35%" justify="space-between">
      <Flex w="40%" justify="space-between">
        {SocialsConfig.map(({ src, alt }) => (
          <Link key={alt}>
            <Image src={src} alt={alt} />
          </Link>
        ))}
      </Flex>
      <Flex w="40%" justify="space-between">
        <Link>
          <Image src={InstagramOrangeSvg} alt="instagram icon" />
        </Link>
        <Link>
          <Image src={VKOrangeSvg} alt="vk icon" />
        </Link>
        <Link>
          <Image src={FBOrangeSvg} alt="facebook icon" />
        </Link>
        <Link>
          <Image src={YoutubeOrangeSvg} alt="youtube icon" />
        </Link>
      </Flex>
    </Flex>
    <Flex as="section" fontSize={13} mt={99} w="25%" gap="60px">
      <List
        bg="transparent"
        w="40%"
        display="flex"
        spacing={25}
        color="#22253B"
        flexDirection="column">
        {MenuConfig.map(({ href, text }) => (
          <ListItem key={text}>
            <Link href={href}>{text}</Link>
          </ListItem>
        ))}
      </List>
      <List
        bg="transparent"
        w="40%"
        display="flex"
        spacing={25}
        color="#F15525"
        flexDirection="column">
        <ListItem>
          <Link href="#">Чему вы научитесь</Link>
        </ListItem>
        <ListItem as="li">
          <Link href="#">Процесс обучения</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Стоимость</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Контакты</Link>
        </ListItem>
      </List>
    </Flex>
    <SimpleGrid as="section" columns={2} spacing={16} w="77%" m="auto" mt={262}>
      {ImagesConfig.map(({ src, justifySelf, alignSelf, alt }) => (
        <Image
          key={alt}
          src={src}
          justifySelf={justifySelf}
          alignSelf={alignSelf}
          alt={alt}></Image>
      ))}
    </SimpleGrid>
  </Box>
);

export default StartPage;

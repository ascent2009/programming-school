import { Box, Flex, Text, SimpleGrid, Image, Button, Link, List, ListItem } from '@chakra-ui/react';
import ArrowSvg from '../../assets/diagonal-arrow.svg';
import YoutubeSvg from '../../assets/youtube.svg';
import InstagramSvg from '../../assets/instagram.svg';
import VKSvg from '../../assets/vkontakte.svg';
import FBSvg from '../../assets/facebook.svg';
import YoutubeOrangeSvg from '../../assets/youtube-orange.svg';
import InstagramOrangeSvg from '../../assets/instagram-orange.svg';
import VKOrangeSvg from '../../assets/vkontakte-orange.svg';
import FBOrangeSvg from '../../assets/facebook-orange.svg';
import ManNotebookPng from '../../assets/man-at-notebook.png';
import HandsPrintPng from '../../assets/printing-hands.png';
import PersonsNotebookPng from '../../assets/two-at-pc.png';
import HandsNotebookPng from '../../assets/hands-on-notebook.png';

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
        <Link>
          <Image src={InstagramSvg} alt="instagram icon" />
        </Link>
        <Link>
          <Image src={VKSvg} alt="vk icon" />
        </Link>
        <Link>
          <Image src={FBSvg} alt="facebook icon" />
        </Link>
        <Link>
          <Image src={YoutubeSvg} alt="youtube icon" />
        </Link>
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
    <Flex as="section" fontSize={13} mt={99} w="22%" gap="60px">
      <List
        bg="transparent"
        w="40%"
        display="flex"
        spacing={25}
        color="#22253B"
        flexDirection="column">
        <ListItem>
          <Link href="#">Чему вы научитесь</Link>
        </ListItem>

        <ListItem>
          <Link href="#">Процесс обучения</Link>
        </ListItem>

        <ListItem>
          <Link href="#">Стоимость</Link>
        </ListItem>

        <ListItem>
          <Link href="#">Контакты</Link>
        </ListItem>
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
    <SimpleGrid columns={2} spacing={16} w="77%" m="auto" mt={262}>
      <Image src={ManNotebookPng} justifySelf="center" alt="man works on a notebook"></Image>
      <Image src={HandsPrintPng} justifySelf="center" alt="printing hands"></Image>
      <Image
        src={PersonsNotebookPng}
        justifySelf="center"
        alignSelf="center"
        alt="two persons on a laptop"></Image>
      <Image src={HandsNotebookPng} justifySelf="center" alt="hands on a laptop keyboard"></Image>
    </SimpleGrid>
  </Box>
);

export default StartPage;

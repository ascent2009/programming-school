import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  GridItem,
  Grid,
  List,
  ListItem,
  Image,
  Heading,
  Text,
  useHighlight,
  Mark,
  Stack,
  useColorMode,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import DownArrowSvg from '../../assets/down-arrow.svg';
import PlaySvg from '../../assets/play.svg';
import ArrowSvg from '../../assets/diagonal-arrow.svg';
import MegaphoneSvg from '../../assets/megaphone.svg';
import Test from '../Test';
import {
  technologiesConfig,
  educationConfig,
  processConfig,
  costConfig,
  tableConfig,
  PNGlib
} from './config';
import Footer from '../Footer/Footer';

const Highlight = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? '#22253B' : '#ffffff';

  const chunks = useHighlight({
    text: 'Школа {программирования} для тех, кому нужны реальные навыки, а не просто сертификат',
    query: ['{', '}', 'программирования']
  });
  return (
    <Heading color={color} fontSize={46} fontFamily="Gilroy-Regular">
      {chunks.map(({ match, text }) => {
        if (!match) return text;
        return text === 'программирования' ? (
          <Text as="em" colorScheme="blue" fontFamily="Gilroy-BoldItalic" fontWeight={900}>
            {text}
          </Text>
        ) : (
          <Mark color="#F15525" fontWeight={900}>
            {text}
          </Mark>
        );
      })}
    </Heading>
  );
};

const MainPage = () => {
  const { user } = useParams();
  const {
    handsNotebook,
    handsPrint,
    manNotebook,
    personsNotebook,
    circles,
    circlesInverted,
    video
  } = PNGlib;
  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? '#22253B' : '#ffffff';
  const colorBorder = colorMode === 'light' ? '#f0f5f8' : 'black';
  const bottomBorder = colorMode === 'light' ? 'transparent' : '#F15525';
  const bgImage = colorMode === 'light' ? 'url(' + circles + ')' : 'url(' + circlesInverted + ')';
  const bgRoot = colorMode === 'light' ? '#ffffff' : 'transparent';
  const bgBtn = colorMode === 'light' ? '#38BFF2' : '#F15525';

  return (
    <>
      <Box as="main" fontFamily="Gilroy-Regular" bg={bgRoot}>
        <Box
          as="section"
          m={0}
          mt="-1.3rem"
          bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
          bgImage={bgImage}
          bgSize="75%"
          bgPosition="right 0 bottom 100%"
          bgRepeat="no-repeat"
          borderBottom={`1px solid ${bottomBorder}`}
          position="relative"
          _before={{
            position: 'absolute',
            w: 140,
            h: 140,
            content: 'url()',
            borderRadius: '50%',
            bottom: '-13.4%',
            left: '44.85%',
            bg: bottomBorder,
            zIndex: -1
          }}>
          <Box
            as="section"
            w="87%"
            mx="auto"
            pt={20}
            _before={{
              position: 'absolute',
              py: 4,
              px: 5,
              content: 'url(' + DownArrowSvg + ')',
              borderRadius: '50%',
              bottom: '-13%',
              left: '45%',
              bg: 'white',
              border: `40px solid ${colorBorder}`
            }}>
            <Grid as="section" templateColumns="repeat(2, 1fr)" justifyContent="space-between">
              <GridItem w="auto">
                <Stack color={color} gap={0} mb={100}>
                  <Highlight />
                  <Text fontSize={16} w="55%" borderTop="1px solid #DEDEDE" my={[31, 18]} pt={15}>
                    Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам
                  </Text>
                  <Box>
                    <Test />
                  </Box>
                </Stack>
              </GridItem>
              <GridItem w="fit-content" justifySelf="right">
                <Image src={handsPrint} alt="printing hands" />
              </GridItem>
            </Grid>
          </Box>
        </Box>
        <Box as="section" m="7rem auto 5.25rem" w="87%" color={color}>
          <Text as="h2" mx="auto" fontSize={46} fontWeight={600} align="center">
            Какие технологии вы изучите:
          </Text>
          <Flex
            bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
            borderRadius={50}
            m="2rem auto"
            justify="center"
            gap={59}>
            <Image src={manNotebook} alt="man at notebook" mt={42} />
            <Flex maxW={467} mt={78} direction="column" gap="1.6rem">
              <List display="flex" flexWrap="wrap" gap="0.63rem">
                {technologiesConfig.map(({ title, bg }) => (
                  <ListItem
                    key={title}
                    bg={bg}
                    color="#ffffff"
                    fontSize="1rem"
                    p={[12, '1rem', 11]}
                    borderRadius="full"
                    minW={95}
                    textAlign="center">
                    {title}
                  </ListItem>
                ))}
              </List>
              <Text fontSize={20} fontWeight={600}>
                Это необходимый минимум для современного backend-разработчика
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box as="section" m="0 auto 5.5rem" w="87%" color={color} borderBottomRadius={50}>
          <Text as="h2" mx="auto" fontSize={46} fontWeight={600} align="center" maxW="38rem">
            Обучение в YtYt – это удобно и результативно
          </Text>
          <List display="flex" flexWrap="wrap" justifyContent="center" gap={27} m="2rem auto 0">
            {educationConfig.map(({ title, src, id, text }) => (
              <ListItem
                display="flex"
                key={id}
                bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
                borderRadius={50}
                color={color}
                maxW="17rem"
                flexDirection="column"
                alignItems="center"
                p={['3rem', 'auto', '2rem']}>
                <Image src={src} alt={title} mb={19} h="4.5rem" />
                <Text as="h3" align="center" mb={2.5} fontSize="1rem" fontWeight={600} h="3rem">
                  {title}
                </Text>
                <Text align="center" fontSize="0.8rem">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box as="section" bgImage={bgImage} bgSize="cover" bgPosition="center" mx={0} mb="5.6rem">
          <Text
            as="h2"
            pt="3.5rem"
            mb="1.6rem"
            fontSize={46}
            fontWeight={600}
            align="center"
            color={color}>
            Как происходит обучение на YtYt?
          </Text>
          <Text align="center" color={color} maxW="40rem" fontSize="1rem" mx="auto" mb="1.8rem">
            Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для
            обучения программированию. На ней вы можете не только изучать теорию, но и запускать
            готовые примеры и даже писать свой собственный код.
          </Text>
          <Box w="fit-content" mx="auto" position="relative">
            <Image src={video} alt="video" objectFit="cover" />
            <Button
              bg="transparent"
              opacity={0.7}
              _hover={{ bg: 'transparent', opacity: 1 }}
              _active={{ transform: 'translateY(2px)', transition: 0.5 }}
              position="absolute"
              top="40%"
              left="33%"
              bottom="40%"
              right="33%">
              <Image src={PlaySvg} alt="play" />
            </Button>
          </Box>

          <List
            display="flex"
            justifyContent="center"
            w="87%"
            m="2rem auto 0"
            as="ul"
            color={color}
            bg={bgRoot}
            borderRadius={50}>
            {processConfig.map(({ id, title, text }) => (
              <ListItem
                key={id}
                display="flex"
                flexDirection="column"
                gap="1.2rem"
                p="3.6rem"
                my="2.8rem"
                _even={{ borderLeft: '1px solid #EAF2F5', borderRight: '1px solid #EAF2F5' }}>
                <Text color={bgBtn} fontWeight={900} fontSize="4.8rem">
                  {id}
                </Text>
                <Text as="h3" fontWeight={600} fontSize="1.5rem" color={color} maxW="17rem">
                  {title}
                </Text>
                <Text color={color} fontSize="1rem" maxW="18rem">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>

          <Flex
            borderRadius="full"
            bg={bgRoot}
            mx="auto"
            mt="1.9rem"
            w="fit-content"
            align="center"
            p="12px 14px"
            gap="1.5rem">
            <Button p="27px 25px" borderRadius="full" fontSize={16} color="#FFFFFF" bg={bgBtn}>
              <Text textShadow="0 3px 3px #969696" bg="transparent">
                Начать обучение
              </Text>
              <Image src={ArrowSvg} alt="diagonal arrow" ml={3} />
            </Button>
            <Text color={color} fontSize={15} fontWeight={600} maxW="14rem">
              Попробуйте, первые уроки бесплатны, но нужно пройти тестирование
            </Text>
          </Flex>
        </Box>
        <Box as="section" bg={bgRoot} m={0} mb="5.5rem" borderRadius={50}>
          <Grid
            w="87%"
            templateRows="repeat(2, auto)"
            templateColumns="repeat(3, 1fr)"
            mx="auto"
            h="fit-content"
            gap="1.9rem"
            alignItems="center">
            <GridItem bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'} borderRadius={50}>
              <Image src={personsNotebook} alt="two at notebook" p="2rem" />
            </GridItem>
            <GridItem
              colSpan={2}
              bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
              borderRadius={50}
              minH={358}
              p="3.4rem 6rem">
              <Flex direction="column" gap="1rem" mt="1rem">
                <Text as="h3" fontSize="2rem" fontWeight={600}>
                  Помощь и поддержка
                </Text>
                <Text fontSize="1rem">
                  Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос
                  своему наставнику.
                </Text>
                <Text fontSize="1rem">
                  Раз в несколько уроков вы будете получать большое задание, которое нужно будет
                  сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и
                  поможет вам стать лучше.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              colSpan={2}
              bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
              borderRadius={50}
              minH={409}
              p="3.4rem 6rem ">
              <Flex direction="column" gap="1rem" mt="4rem">
                <Text as="h3" fontSize="2rem" fontWeight={600}>
                  Методика обучения
                </Text>
                <Text fontSize="1rem">
                  Весь учебный материал структурирован по принципу «спирального обучения». Сначала
                  вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в
                  изученные темы, доводя их понимание до совершенства. Такой подход упрощает
                  обучение и гарантирует, что вы не пропустите ничего важного.
                </Text>
              </Flex>
            </GridItem>
            <GridItem bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'} borderRadius={50}>
              <Image src={handsNotebook} alt="hands on keyboard" p="2rem" />
            </GridItem>
          </Grid>
        </Box>
        <Box as="section" bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'} pb="4rem">
          <Text
            as="h2"
            pt="5.5rem"
            mb="2rem"
            fontSize={46}
            fontWeight={600}
            align="center"
            color={color}>
            Стоимость обучения
          </Text>
          <List display="flex" w="87%" mx="auto" mb="2.6rem" gap="4.3rem" justifyContent="center">
            {costConfig.map(({ id, src, text }) => (
              <ListItem
                key={id}
                display="flex"
                alignItems="center"
                gap="1.8rem"
                _odd={{ maxW: '27rem' }}>
                <Image src={src} alt={text} />
                <Text>{text}</Text>
              </ListItem>
            ))}
          </List>
          <Box as="section" bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}>
            <TableContainer px="2.5rem" bg={bgRoot} borderRadius={35} mx="auto" w="87%" py="2.3rem">
              <Table variant="striped" colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th>
                      <Text fontFamily="Gilroy-Regular" color="#38BFF2" fontSize="1rem">
                        Блок
                      </Text>
                    </Th>
                    <Th>
                      <Text fontFamily="Gilroy-Regular" color="#38BFF2" fontSize="1rem">
                        Стоимость (₽)
                      </Text>
                    </Th>
                    <Th>
                      <Text fontFamily="Gilroy-Regular" color="#38BFF2" fontSize="1rem">
                        Расчетное время обучения (мес.) *
                      </Text>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody mt="1rem">
                  {tableConfig.map(({ block, price, period }) => (
                    <Tr key={block}>
                      <Td fontSize="1.2rem">{block}</Td>
                      <Td fontSize="1.2rem">{price}</Td>
                      <Td fontSize="1.2rem" w="17.3rem">
                        {period}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th fontWeight="900" fontFamily="Gilroy-Regular" fontSize="1.5rem">
                      Итого
                    </Th>
                    <Th fontWeight="900" fontFamily="Gilroy-Regular" fontSize="1.5rem">
                      79 400
                    </Th>
                    <Th fontWeight="900" fontFamily="Gilroy-Regular" fontSize="1.5rem">
                      12
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <Text color="#8E8E8E" w="87%" fontSize="1rem" m="1.5rem auto 2rem" px="2.5rem">
              * если занятиям уделяется около 20 часов в неделю
            </Text>
          </Box>
          <Flex
            as="section"
            w="87%"
            mx="auto"
            borderRadius={35}
            bg={colorMode === 'light' ? '#cadce3' : 'transparent'}
            justify="center"
            align="center"
            gap="1.4rem"
            py="4rem">
            <Flex display="flex" gap="2rem" maxW="45rem">
              <Image src={MegaphoneSvg} alt="megaphone" />
              <Text fontSize="1rem" color={color}>
                Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение
                с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала.
                Только так мы можем гарантировать, что вы получите все знания, предусмотренные
                учебной программой.
              </Text>
            </Flex>
            <Button p="2rem 3.5rem" borderRadius="full" fontSize={20} color="#FFFFFF" bg={bgBtn}>
              <Text textShadow="0 3px 3px #969696" bg="transparent">
                Начать обучение
              </Text>
              <Image src={ArrowSvg} alt="diagonal arrow" ml={3} />
            </Button>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MainPage;

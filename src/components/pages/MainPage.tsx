import { memo, useRef } from 'react';
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
import EastArrowSvg from '../../assets/grey-east-arrow.svg';
import SmartphoneSvg from '../../assets/smartphone.svg';
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
    text: 'Школа { программирования } для тех, кому нужны реальные навыки, а не просто сертификат',
    query: ['{', '}', 'программирования']
  });
  return (
    <Heading
      color={color}
      fontSize={[24, 24, 24, 46]}
      fontFamily="Gilroy-Regular"
      textAlign={['center', 'center', 'center', 'left']}
      borderBottom={['1px solid #DEDEDE', '1px solid #DEDEDE', '1px solid #DEDEDE', 'none']}
      pb={['1rem', '1rem', '1rem', 'auto']}>
      {chunks.map(({ match, text }) => {
        if (!match) return text;
        return text === 'программирования' ? (
          <Text as="i" colorScheme="blue" fontWeight={900}>
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
  const refScroll: React.MutableRefObject<null | number | any> = useRef(null);

  const scroll = (scrollOffset: number) => {
    refScroll.current.scrollLeft += scrollOffset;
    if (refScroll.current.scrollLeft > 550) {
      refScroll.current.scrollLeft = 0;
    }
    console.log(refScroll.current.scrollLeft);
  };

  return (
    <>
      <Box as="main" fontFamily="Gilroy-Regular" bg={bgRoot}>
        <Box
          as="section"
          m={0}
          mt={[0, 0, 0, '-1.3rem']}
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
            bottom: ['-10.3%', '-10.3%', '-10.3%', '-13.4%'],
            left: ['30.5%', '30.5%', '30.5%', '44.85%'],
            bg: bottomBorder,
            zIndex: -1
          }}>
          <Box
            as="section"
            w="87%"
            mx="auto"
            pt={[6, 6, 6, 20]}
            _before={{
              position: 'absolute',
              py: 4,
              px: 5,
              content: 'url(' + DownArrowSvg + ')',
              borderRadius: '50%',
              bottom: ['-10%', '-10%', '-10%', '-13%'],
              left: ['31%', '31%', '31%', '45%'],
              bg: 'white',
              border: `40px solid ${colorBorder}`
            }}>
            <Grid
              as="section"
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)'
              ]}
              justifyContent="space-between">
              <GridItem w="auto">
                <Stack color={color} gap={0} mb={[63, 63, 63, 100]}>
                  <Highlight />
                  <Text
                    fontSize={[12, 12, 12, 16]}
                    w={['100%', '100%', '100%', '55%']}
                    borderTop={['none', 'none', 'none', '1px solid #DEDEDE']}
                    m={['9px auto 18px', '9px auto 18px', '9px auto 18px', '31px 0 18px']}
                    pt={[0, 0, 0, 15]}
                    textAlign={['center', 'center', 'center', 'left']}>
                    Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам
                  </Text>
                  <Box>
                    <Test />
                  </Box>
                </Stack>
              </GridItem>
              <GridItem
                w="fit-content"
                justifySelf="right"
                display={['none', 'none', 'none', 'grid']}>
                <Image src={handsPrint} alt="printing hands" />
              </GridItem>
            </Grid>
            <Box w="70%" mx="auto" display={['flex', 'flex', 'flex', 'none']} pb={20}>
              <Image src={handsPrint} alt="printing hands" />
            </Box>
          </Box>
        </Box>
        <Box as="section" m="7rem auto 5.25rem" w="87%" color={color}>
          <Text
            as="h2"
            mx="auto"
            fontSize={[24, 24, 24, 46]}
            fontWeight={600}
            align="center"
            w={['60%', '60%', '60%', 'fit-content']}>
            Какие технологии вы изучите:
          </Text>
          <Flex
            bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
            borderRadius={50}
            m="2rem auto"
            justify="center"
            gap={59}>
            <Image
              src={manNotebook}
              alt="man at notebook"
              mt={42}
              display={['none', 'none', 'none', 'flex']}
            />
            <Flex
              maxW={['95%', '95%', '95%', 467]}
              mt={[0, 0, 0, 78]}
              direction="column"
              gap="1.6rem">
              <List
                display={['grid', 'grid', 'grid', 'flex']}
                gridTemplateColumns="repeat(3, 1fr)"
                flexWrap="wrap"
                gap="0.63rem"
                p={['1rem', '1rem', '1rem', 0]}
                justifyContent={['center', 'center', 'center', 'flex-start']}
                h="fit-content">
                {technologiesConfig.map(({ title, bg, spanCol }) => (
                  <ListItem
                    key={title}
                    bg={bg}
                    color="#ffffff"
                    fontSize="1rem"
                    p={['12px 14px', '12px 14px', '12px 14px', '12px 1rem']}
                    borderRadius="full"
                    minW={[99, 99, 99, 95]}
                    textAlign="center"
                    gridColumn={spanCol}>
                    {title}
                  </ListItem>
                ))}
              </List>
              <Text fontSize={20} fontWeight={600} display={['none', 'none', 'none', 'flex']}>
                Это необходимый минимум для современного backend-разработчика
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          as="section"
          m={['0 auto 0.8rem', '0 auto 0.8rem', '0 auto 0.8rem', '0 auto 5.5rem']}
          w="87%"
          color={color}
          borderBottomRadius={50}>
          <Text
            as="h2"
            mx="auto"
            fontSize={[24, 24, 24, 46]}
            fontWeight={600}
            align="center"
            maxW="38rem">
            Обучение в YtYt – это удобно и результативно
          </Text>
          <List
            display={['grid', 'grid', 'grid', 'flex']}
            flexWrap="wrap"
            justifyContent="center"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={['10px', '10px', '10px', 27]}
            m="2rem auto 0">
            {educationConfig.map(({ title, src, id, text }) => (
              <ListItem
                display="flex"
                key={id}
                bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
                borderRadius={[25, 25, 25, 50]}
                color={color}
                maxW={['auto', 'auto', 'auto', '17rem']}
                flexDirection="column"
                alignItems="center"
                p={['1.2rem', '1.2rem', '1.2rem', '2rem']}
                _last={{
                  gridColumn: '1 / 3',
                  minH: ['fit-content', 'fit-content', 'fit-content', '270.56px'],
                  display: ['grid', 'grid', 'grid', 'flex'],
                  gridTemplateColumns: '30% 70%',
                  justifyItems: 'center',
                  gridTemplateRows: 'repeat(2, 1fr)'
                }}>
                <Image
                  src={src}
                  alt={title}
                  mb={['9px', '9px', '9px', 19]}
                  h={['40px', '40px', '40px', '4.5rem']}
                  loading="lazy"
                  gridRow="1 / 3"
                  _last={{
                    mb: [0, 0, 0, 19]
                  }}
                />
                <Text
                  as="h3"
                  align="center"
                  mb={[4, 4, 4, 2.5]}
                  fontSize={[12, 12, 12, '1rem']}
                  fontWeight={600}
                  h="3rem"
                  minH={37}
                  _last={{
                    minH: ['fit-content', 'fit-content', 'fit-content', 37],

                    mb: [1, 1, 1, 2.5],
                    justifySelf: 'start'
                  }}>
                  {title}
                </Text>
                <Text
                  align="center"
                  fontSize={[9, 9, 9, '0.8rem']}
                  _last={{
                    minH: ['fit-content', 'fit-content', 'fit-content', 37],

                    justifySelf: 'start'
                  }}>
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          as="section"
          bgImage={bgImage}
          bgSize="cover"
          bgPosition="center"
          mx={0}
          mb={['2.5rem', '2.5rem', '2.5rem', '5.6rem']}>
          <Text
            as="h2"
            pt="3.5rem"
            mb={['1rem', '1rem', '1rem', '1.6rem']}
            fontSize={[24, 24, 24, 46]}
            fontWeight={600}
            align="center"
            color={color}
            w="87%"
            mx="auto">
            Как происходит обучение на YtYt?
          </Text>
          <Text
            align="center"
            color={color}
            maxW={['87%', '87%', '87%', '40rem']}
            fontSize={['0.8rem', '0.8rem', '0.8rem', '1rem']}
            mx="auto"
            mb="1.8rem">
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
            flexDirection={['column', 'column', 'column', 'row']}
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
                gap={['0.9rem', '0.9rem', '0.9rem', '1.2rem']}
                p="3rem"
                my={0}
                borderBottom={[
                  '1px solid #EAF2F5',
                  '1px solid #EAF2F5',
                  '1px solid #EAF2F5',
                  'none'
                ]}
                _even={{ borderLeft: '1px solid #EAF2F5', borderRight: '1px solid #EAF2F5' }}
                _last={{ borderBottom: 'none' }}>
                <Text
                  color={bgBtn}
                  fontWeight={900}
                  fontSize={['3.1rem', '3.1rem', '3.1rem', '4.8rem']}>
                  {id}
                </Text>
                <Text
                  as="h3"
                  fontWeight={600}
                  fontSize={[20, 20, 20, '1.5rem']}
                  color={color}
                  maxW="17rem">
                  {title}
                </Text>
                <Text color={color} fontSize={[12, 12, 12, '1rem']} maxW="18rem">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>

          <Flex
            borderRadius="full"
            direction={['column', 'column', 'column', 'row']}
            bg={bgRoot}
            mx="auto"
            mt="1.9rem"
            w={['87%', '87%', '87%', 'fit-content']}
            align="center"
            p="12px 14px"
            gap={['0.8rem', '0.8rem', '0.8rem', '1.5rem']}>
            <Button p="27px 25px" borderRadius="full" fontSize={16} color="#FFFFFF" bg={bgBtn}>
              <Text textShadow="0 3px 3px #969696" bg="transparent">
                Начать обучение
              </Text>
              <Image src={ArrowSvg} alt="diagonal arrow" ml={3} />
            </Button>
            <Text
              color={color}
              fontSize={[13, 13, 13, 15]}
              fontWeight={600}
              maxW={['80%', '80%', '80%', '14rem']}
              align={['center', 'center', 'center', 'left']}>
              Попробуйте, первые уроки бесплатны, но нужно пройти тестирование
            </Text>
          </Flex>
        </Box>
        <Box
          as="section"
          bg={bgRoot}
          m={0}
          mb={['.8rem', '.8rem', '.8rem', '5.5rem']}
          borderRadius={50}>
          <Grid
            w="87%"
            templateRows={[
              'repeat(4, auto)',
              'repeat(4, auto)',
              'repeat(4, auto)',
              'repeat(2, auto)'
            ]}
            templateColumns={['100%', '100%', '100%', 'repeat(3, 1fr)']}
            mx="auto"
            h="fit-content"
            gap={['0.8rem', '0.8rem', '0.8rem', '1.9rem']}
            alignItems="center">
            <GridItem bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'} borderRadius={50}>
              <Image src={personsNotebook} alt="two at notebook" p="2rem" />
            </GridItem>
            <GridItem
              colSpan={[1, 1, 1, 2]}
              bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
              borderRadius={50}
              minH={['auto', 'auto', 'auto', 358]}
              p={['38px 20px', '38px 20px', '38px 20px', '3.4rem 6rem']}>
              <Flex direction="column" gap="1rem" mt={[0, 0, 0, '1rem']}>
                <Text as="h3" fontSize={[20, 20, 20, '2rem']} fontWeight={600}>
                  Помощь и поддержка
                </Text>
                <Text fontSize={[12, 12, 12, '1rem']}>
                  Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос
                  своему наставнику.
                </Text>
                <Text fontSize={[12, 12, 12, '1rem']}>
                  Раз в несколько уроков вы будете получать большое задание, которое нужно будет
                  сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и
                  поможет вам стать лучше.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              colSpan={[1, 1, 1, 2]}
              gridRow={[4, 4, 4, 'auto']}
              bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
              borderRadius={50}
              minH={['auto', 'auto', 'auto', 409]}
              p={['38px 20px', '38px 20px', '38px 20px', '3.4rem 6rem']}>
              <Flex direction="column" gap="1rem" mt={[0, 0, 0, '4rem']}>
                <Text as="h3" fontSize={[20, 20, 20, '2rem']} fontWeight={600}>
                  Методика обучения
                </Text>
                <Text fontSize={[12, 12, 12, '1rem']}>
                  Весь учебный материал структурирован по принципу «спирального обучения». Сначала
                  вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в
                  изученные темы, доводя их понимание до совершенства. Такой подход упрощает
                  обучение и гарантирует, что вы не пропустите ничего важного.
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}
              borderRadius={50}
              gridRow={[3, 3, 3, 'auto']}>
              <Image src={handsNotebook} alt="hands on keyboard" p="2rem" />
            </GridItem>
          </Grid>
        </Box>
        <Box as="section" bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'} pb="4rem">
          <Text
            as="h2"
            pt={['3.5rem', '3.5rem', '3.5rem', '5.5rem']}
            mb="2rem"
            fontSize={[22, 22, 22, 46]}
            fontWeight={600}
            align="center"
            color={color}>
            Стоимость обучения
          </Text>
          <List
            display="flex"
            w="87%"
            mx="auto"
            mb="2.6rem"
            gap={['2rem', '2rem', '2rem', '4.3rem']}
            alignItems={['center', 'center', 'center', 'left']}
            justifyContent="center"
            flexDirection={['column', 'column', 'column', 'row']}>
            {costConfig.map(({ id, src, text }) => (
              <ListItem
                key={id}
                display="flex"
                flexDirection={['column', 'column', 'column', 'row']}
                alignItems="center"
                gap={['1rem', '1rem', '1rem', '1.8rem']}
                _odd={{ maxW: '27rem' }}>
                <Image src={src} alt={text} />
                <Text
                  fontSize={[12, 12, 12, 16]}
                  align={['center', 'center', 'center', 'left']}
                  w={['80%', '80%', '80%', 'auto']}>
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
          <Box as="section" bg={colorMode === 'light' ? '#eaf2f5' : 'transparent'}>
            <Button
              display={['flex', 'flex', 'flex', 'none']}
              gap={2}
              mx="auto"
              w="87%"
              mb="20px"
              justifyContent="flex-start"
              onClick={() => {
                scroll(223);
              }}>
              <Image src={SmartphoneSvg} alt="smartphone" />
              <Image src={EastArrowSvg} alt="scroll arrow" />
            </Button>
            <TableContainer
              px="2.5rem"
              bg={bgRoot}
              borderRadius={35}
              mx="auto"
              w="87%"
              py="2.3rem"
              ref={refScroll}>
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
                      <Td fontSize={[13, 13, 13, '1.2rem']}>{block}</Td>
                      <Td fontSize={[13, 13, 13, '1.2rem']}>{price}</Td>
                      <Td fontSize={[13, 13, 13, '1.2rem']} w="17.3rem">
                        {period}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th
                      fontWeight="900"
                      fontFamily="Gilroy-Regular"
                      fontSize={[19, 19, 19, '1.5rem']}>
                      Итого
                    </Th>
                    <Th
                      fontWeight="900"
                      fontFamily="Gilroy-Regular"
                      fontSize={[19, 19, 19, '1.5rem']}>
                      79 400
                    </Th>
                    <Th
                      fontWeight="900"
                      fontFamily="Gilroy-Regular"
                      fontSize={[19, 19, 19, '1.5rem']}>
                      12
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <Text
              color="#8E8E8E"
              w="87%"
              fontSize={[12, 12, 12, '1rem']}
              m="1.5rem auto 2rem"
              px="2.5rem">
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
            gap={['1rem', '1rem', '1rem', '1.4rem']}
            py={['2.5rem', '2.5rem', '2.5rem', '4rem']}
            direction={['column', 'column', 'column', 'row']}>
            <Flex
              display="flex"
              gap={['1rem', '1rem', '1rem', '2rem']}
              maxW="45rem"
              direction={['column', 'column', 'column', 'row']}
              align="center"
              w={['80%', '80%', '80%', 'auto']}>
              <Image
                src={MegaphoneSvg}
                alt="megaphone"
                w={['fit-content', 'fit-content', 'fit-content', 'auto']}
              />
              <Text
                fontSize={[12, 12, 12, '1rem']}
                color={color}
                align={['center', 'center', 'center', 'left']}>
                Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение
                с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала.
                Только так мы можем гарантировать, что вы получите все знания, предусмотренные
                учебной программой.
              </Text>
            </Flex>
            <Button
              p="2rem 3.5rem"
              borderRadius="full"
              fontSize={20}
              color="#FFFFFF"
              bg={bgBtn}
              w={['80%', '80%', '80%', 'auto']}>
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

export default memo(MainPage);

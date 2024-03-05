import {
  Box,
  GridItem,
  Grid,
  Image,
  Heading,
  Text,
  useHighlight,
  Mark,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import HandsPrintPng from '../../assets/printing-hands.png';
import CirclesPng from '../../assets/bg-circles.png';
import CirclesInvertedPng from '../../assets/bg-circles-inverted.png';
import DownArrowSvg from '../../assets/down-arrow.svg';
import Test from '../Test';

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
  const { colorMode } = useColorMode();
  const color = colorMode === 'light' ? '#22253B' : '#ffffff';
  const colorBorder = colorMode === 'light' ? '#f0f5f8' : 'black';
  const bottomBorder = colorMode === 'light' ? 'transparent' : '#F15525';
  const bgImage =
    colorMode === 'light' ? 'url(' + CirclesPng + ')' : 'url(' + CirclesInvertedPng + ')';

  return (
    <Box
      as="main"
      m={0}
      mt="-1.3rem"
      fontFamily="Gilroy-Regular"
      bg="transparent"
      bgImage={bgImage}
      bgSize="75%"
      bgPosition="right 0 bottom 100%"
      bgRepeat="no-repeat"
      borderBottom={`1px solid ${bottomBorder}`}
      _before={{
        position: 'absolute',
        w: 140,
        h: 140,
        content: 'url()',
        borderRadius: '50%',
        bottom: '-10.3%',
        left: '44.9%',
        bg: bottomBorder,
        zIndex: -1
      }}>
      <Box
        as="section"
        w="87%"
        mx="auto"
        pt={30}
        _before={{
          position: 'absolute',
          py: 4,
          px: 5,
          content: 'url(' + DownArrowSvg + ')',
          borderRadius: '50%',
          bottom: '-10%',
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
            <Image src={HandsPrintPng} alt="printing hands" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainPage;

import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Image,
  Button,
  Link,
  List,
  ListItem,
  useColorMode
} from '@chakra-ui/react';
// import ArrowSvg from '../../assets/diagonal-arrow.svg';
import { MenuConfig, ImagesConfig } from './config';
import SocialsIcons from '../SocialsIcons';
import Test from '../Test';

const StartPage = () => {
  const { colorMode } = useColorMode();

  // const bg = colorMode === 'light' ? '#38BFF2' : '#F15525';
  const color = colorMode === 'light' ? '#22253B' : '#F15525';

  return (
    <Box as="main" w="87%" mt="37px" mx="auto" fontFamily="Gilroy-Regular" bg="transparent">
      {/* <Flex as="section" gap={69}>
        <Button
          bg={bg}
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
        
      </Flex> */}
      <Test />
      <SocialsIcons />
      <Flex as="section" fontSize={13} mt={99} w="25%" gap="60px">
        <List
          bg="transparent"
          w="40%"
          display="flex"
          spacing={25}
          color={color}
          flexDirection="column">
          {MenuConfig.map(({ href, text }) => (
            <ListItem
              key={text}
              _hover={{
                transition: '0.5s',
                transform: 'scale(1.2) translate(10px)'
              }}>
              <Link href={href}>{text}</Link>
            </ListItem>
          ))}
        </List>
      </Flex>
      <SimpleGrid as="section" columns={2} spacing={16} w="77%" mx="auto" mt={262} pb={189}>
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
};

export default StartPage;

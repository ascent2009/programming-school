import { Box, Flex, SimpleGrid, Image, Link, List, ListItem, useColorMode } from '@chakra-ui/react';
import { MenuConfig, ImagesConfig } from './config';
import SocialsIcons from '../SocialsIcons';
import Test from '../Test';

const StartPage = () => {
  const { colorMode } = useColorMode();

  const color = colorMode === 'light' ? '#22253B' : '#F15525';

  return (
    <Box as="main" w="87%" pt="37px" mx="auto" fontFamily="Gilroy-Regular" bg="transparent">
      <Test />
      <SocialsIcons width="35%" />
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
              }}
              _last={{ display: 'none' }}>
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

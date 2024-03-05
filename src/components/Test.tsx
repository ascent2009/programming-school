/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  useColorMode,
  Image,
  Flex,
  RadioGroup,
  Stack,
  Radio
} from '@chakra-ui/react';
import ArrowSvg from '../assets/diagonal-arrow.svg';
import ThumbUpSvg from '../assets/thumbUp.svg';

interface ITest {
  stepOne?: boolean;
  testResult?: boolean;
  correctAnswer?: boolean;
  title: string;
  width: string;
  paddY: string | number;
  paddX: string | number;
  align: string;
  icon?: JSX.Element | null;
}

const Heading: React.FC<ITest> = ({
  stepOne,
  testResult,
  correctAnswer,
  title,
  width,
  paddY,
  paddX,
  align,
  icon
}) => (
  <ModalHeader fontSize={24} textAlign="center" w="70%" mt={55} mb={22} p={0}>
    {!stepOne ? (
      'Перед тем, как приступить к обучению, необходимо пройти небольшой тест'
    ) : (
      <Flex direction="column" gap={30} align={align}>
        <Text
          display="flex"
          flexDirection="column"
          alignItems="center"
          w={width}
          bg="#EAEAEA"
          color="#22253B"
          fontSize={14}
          py={paddY}
          px={paddX}
          borderRadius="full">
          {icon}
          {title}
        </Text>
        <Text display={testResult ? 'none' : 'block'}>
          {!correctAnswer ? null : 'Правильно! С логикой у вас все отлично'}
        </Text>
      </Flex>
    )}
  </ModalHeader>
);

const Test = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenResult, onOpen: onOpenResult, onClose: onCloseResult } = useDisclosure();
  const { colorMode } = useColorMode();
  const [stepOne, setStepOne] = useState(false);
  const [value, setValue] = useState('1');
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [testResult, setTestResult] = useState(false);
  const navigate = useNavigate();

  const onCloseModal = () => {
    onClose();
    setCorrectAnswer(false);
  };

  console.log('one:', stepOne);
  console.log('correct:', correctAnswer);
  console.log('test:', testResult);

  const bg = colorMode === 'light' ? '#38BFF2' : '#F15525';
  return (
    <>
      <Button
        onClick={onOpen}
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

      <Modal isOpen={isOpen} onClose={onCloseModal} size="3xl">
        <ModalOverlay />
        <ModalContent
          fontFamily="Gilroy-Regular"
          fontWeight="normal"
          borderRadius={30}
          alignItems="center"
          justifyContent="flex-start">
          <Heading
            stepOne={stepOne}
            correctAnswer={correctAnswer}
            testResult={testResult}
            title="ЗАДАНИЕ №1"
            width="21%"
            paddY={2}
            paddX="auto"
            align="flex-start"
            icon={null}
          />
          <ModalCloseButton opacity={0.6} _hover={{ opacity: '1' }} />
          <ModalBody
            w="70%"
            fontSize={15}
            textAlign={!stepOne ? 'center' : 'left'}
            mt={0}
            mb={6}
            p={0}>
            {!stepOne ? (
              `Тест состоит из 4 заданий на логическое мышление и прочие навыки, необходимые
            программисту. Задания не самые простые. Но ни в коем случае не выбирайте ответы наугад.
            Если вы не можете дать правильный ответ – выбирайте пункт «Не знаю».`
            ) : !correctAnswer ? (
              `Иван Иванович
            купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по
            32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не
            предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли
            продавщица ошиблась в подсчетах?`
            ) : (
              <Flex direction="column" gap={27}>
                <Text>
                  Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек будет стоить
                  четное число рублей. Аналогично с печеньем. А так как пакетов сока ровно 2, то за
                  сок тоже нужно будет отдать четное число рублей. Получается, что ни при каких
                  условиях в результате не может получиться нечетное число 525, а значит, продавщица
                  действительно пыталась обсчитать Ивана Ивановича.
                </Text>
                <Text>
                  В этом задании проверялось ваше логическое мышление. Это критически важный навык
                  для любого программиста.
                </Text>
              </Flex>
            )}
          </ModalBody>

          <ModalFooter mb={10} p={0} w="70%" justifyContent="center">
            {!stepOne ? (
              <Button
                colorScheme="blue"
                p={[25, 35]}
                mr={3}
                bg={bg}
                onClick={() => setStepOne(true)}
                borderRadius="full">
                <Text color="white" fontSize={20}>
                  Начать тест
                </Text>
                <Image src={ArrowSvg} alt="diagonal arrow" ml={4} boxSize={3} />
              </Button>
            ) : (
              <Flex justify={!correctAnswer ? 'space-between' : 'flex-end'} align="end" w="100%">
                {!correctAnswer ? (
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack>
                      <Radio
                        borderRadius={4}
                        value="1"
                        fontSize={15}
                        _checked={{
                          bg: bg,
                          color: 'white',
                          border: colorMode === 'light' ? '' : 'white solid 2px'
                        }}>
                        Да, сумма явно неверная
                      </Radio>
                      <Radio
                        borderRadius={4}
                        value="2"
                        fontSize={15}
                        _checked={{
                          bg: bg,
                          color: 'white',
                          border: colorMode === 'light' ? '' : 'white solid 2px'
                        }}>
                        Нет, такая сумма вполне могла получиться
                      </Radio>
                      <Radio
                        borderRadius={4}
                        value="3"
                        fontSize={15}
                        _checked={{
                          bg: bg,
                          color: 'white',
                          border: colorMode === 'light' ? '' : 'white solid 2px'
                        }}>
                        Не знаю, не получается решить
                      </Radio>
                    </Stack>
                  </RadioGroup>
                ) : null}
                <Button
                  colorScheme="blue"
                  p={[16, 22]}
                  mr={1}
                  bg={bg}
                  onClick={
                    !correctAnswer
                      ? () => {
                          value !== '1' ? alert('Ответ не принят') : setCorrectAnswer(true);
                        }
                      : () => {
                          onCloseModal();
                          setTestResult(true);
                          onOpenResult();
                        }
                  }
                  borderRadius="full">
                  <Text color="white" fontSize={15}>
                    {!correctAnswer ? 'Ответить' : 'Далее'}
                  </Text>
                  <Image
                    src={ArrowSvg}
                    alt="diagonal arrow"
                    transform="rotate(45deg)"
                    ml={4}
                    boxSize={3}
                  />
                </Button>
              </Flex>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenResult} onClose={onCloseResult} size="3xl">
        <ModalOverlay />
        <ModalContent
          fontFamily="Gilroy-Regular"
          fontWeight="normal"
          borderRadius={30}
          alignItems="center"
          justifyContent="flex-start">
          <Heading
            stepOne={stepOne}
            correctAnswer={correctAnswer}
            testResult={testResult}
            title="НAБРАНО 4/4"
            width="30%"
            paddY={4}
            paddX={8}
            align="center"
            icon={<Image mb="7px" src={ThumbUpSvg} />}
          />
          <ModalCloseButton opacity={0.6} _hover={{ opacity: '1' }} />
          <ModalBody
            w="70%"
            fontSize={15}
            textAlign={!stepOne ? 'center' : 'left'}
            mt={0}
            mb={6}
            p={0}>
            <Text textAlign="center">
              Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните
              обучение прямо сейчас, доступ ко вводным урокам уже открыт
            </Text>
          </ModalBody>

          <ModalFooter mb={10} p={0} w="70%" justifyContent="center">
            <Button
              colorScheme="blue"
              p={[16, 22]}
              mr={1}
              bg={bg}
              onClick={() => {
                alert('Переход на страницу обучения');
                setStepOne(false);
                setTestResult(false);
                onCloseResult();
                navigate('/main');
              }}
              borderRadius="full">
              <Text color="white" fontSize={15}>
                Начать учиться бесплатно
              </Text>
              <Image
                src={ArrowSvg}
                alt="diagonal arrow"
                transform="rotate(45deg)"
                ml={4}
                boxSize={3}
              />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Test;

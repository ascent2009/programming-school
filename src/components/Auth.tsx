// import { useRef } from 'react';
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
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const Auth = () => {
  const { isOpen, onClose } = useDisclosure();

  // const initialRef = useRef(null);
  // const finalRef = useRef(null);

  return (
    <Modal
      // initialFocusRef={initialRef}
      // finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input /*ref={initialRef}*/ placeholder="First name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Auth;

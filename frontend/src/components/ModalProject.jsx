import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalProject({ fakeData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        w="20%"
        ml="1rem"
        bgColor="#111111"
        border="none"
        textDecoration="none"
        color="#E5E6E4"
        fontSize="1.5rem"
        _hover={{ bgColor: "#111111" }}
        _focus={{ bgColor: "#111111" }}
        onClick={onOpen}
      >
        Learn more about {fakeData.name}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: "95%", lg: "50vw" }} bgColor="#111111">
          <ModalHeader bgColor="#E5E6E4" pt="30px" pb="40px" paddingX="50px">
            {fakeData.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="#E5E6E4">{fakeData.desc}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalProject;

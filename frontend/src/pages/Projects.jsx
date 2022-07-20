import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Header from "../components/Header";

import SquareProject from "../assets/square_project.png";
import "../style/Projects.css";

export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box filter={isOpen ? "blur(5px)" : "none"}>
      <Header />

      <Heading
        as="h1"
        pt={{ base: "1rem", lg: "10rem" }}
        color="#E5E6E4"
        fontSize={{ base: "36px", md: "52px", lg: "72px" }}
        ml={{ base: "none", md: "2rem", lg: "5rem" }}
        textAlign={{ base: "center", md: "left" }}
      >
        My <span className="project">projects</span>
      </Heading>
      <Text
        w="50%"
        fontSize={{ base: "xl", md: "2xl" }}
        color="#E5E6E4"
        ml={{ base: "none", md: "2rem", lg: "5rem" }}
        mt="2rem"
        textAlign={{ base: "center", md: "left" }}
      >
        I have conducted several projects, all of them in a team of 4 or 5
        people. They were great opportunities to consolidate my knowledge and
        learn new technologies.
      </Text>

      <Box w="70%" ml="auto" mr="auto" mt="5rem">
        <Flex justifyContent="space-around" wrap="wrap">
          <Flex flexDir="column" w="45%" alignItems="center">
            <Box w="100%" m="1rem">
              <Image src={SquareProject} alt="square project" />
            </Box>
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
              Learn more about this project
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent
                maxWidth={{ base: "95%", lg: "50vw" }}
                bgColor="#111111"
              >
                <ModalHeader
                  bgColor="#E5E6E4"
                  pt="30px"
                  pb="40px"
                  paddingX="50px"
                >
                  The Square Project
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody bgColor="#E5E6E4">Coucou</ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
          <Flex flexDir="column" w="45%" alignItems="center">
            <Box w="100%" m="1rem">
              <Image src={SquareProject} alt="square project" />
            </Box>
            <Button
              w="20%"
              ml="1rem"
              bgColor="#111111"
              border="none"
              _hover={{ bgColor: "#111111" }}
              _focus={{ bgColor: "#111111" }}
              textDecoration="none"
              color="#9BEAEC"
            >
              Learn more
            </Button>
          </Flex>
          <Flex flexDir="column" w="45%" alignItems="center">
            <Box w="100%" m="1rem">
              <Image src={SquareProject} alt="square project" />
            </Box>
            <Button
              w="20%"
              ml="1rem"
              bgColor="#111111"
              border="none"
              _hover={{ bgColor: "#111111" }}
              _focus={{ bgColor: "#111111" }}
              textDecoration="none"
              color="#9BEAEC"
            >
              Learn more
            </Button>
          </Flex>
          <Flex flexDir="column" w="45%" alignItems="center">
            <Box w="100%" m="1rem">
              <Image src={SquareProject} alt="square project" />
            </Box>
            <Button
              w="20%"
              ml="1rem"
              bgColor="#111111"
              border="none"
              _hover={{ bgColor: "#111111" }}
              _focus={{ bgColor: "#111111" }}
              textDecoration="none"
              color="#9BEAEC"
            >
              Learn more
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

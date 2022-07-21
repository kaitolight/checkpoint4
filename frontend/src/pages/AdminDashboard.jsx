import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function AdminDashboard() {
  const [getProjects, setGetProjects] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [newProject, setNewProject] = useState([]);
  const [modalName, setModalName] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [modalImage, setModalImage] = useState("");

  const { userId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const currentProjects = () => {
    axios
      .get(`http://localhost:5000/api/user/${userId}/projects`)
      .then((res) => setGetProjects(res.data))
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    currentProjects();
  }, []);

  return (
    <Box bgColor="#111111" h="100vh">
      <Flex w="100%" justifyContent="space-around">
        <Box w="45%" border="1px solid white" color="white">
          <Heading as="h2" textAlign="center" pt="1rem">
            Les différents projets sur la platforme
          </Heading>
          {getProjects.map((pro) => (
            <Flex justifyContent="center" mb="1rem" mt="1rem" key={pro.id}>
              <Box w="95%" bgColor="white">
                <Heading as="h3" color="black" textAlign="center">
                  {pro.name}
                </Heading>
                <Text color="black" p="1rem">
                  {pro.description}
                </Text>
                <Flex justifyContent="space-around">
                  <Button
                    bgColor="black"
                    color="white"
                    _hover={{ bgColor: "black" }}
                    _focus={{ bgColor: "black" }}
                    mb="1rem"
                    onClick={onOpen}
                  >
                    Modifier
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
                        Modifier {pro.name}
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody bgColor="#E5E6E4">
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input
                            placeholder="name"
                            type="text"
                            value={modalName}
                            id="modalName"
                            mb="1rem"
                            onChange={(e) => setModalName(e.target.value)}
                          />
                          <FormLabel>Description</FormLabel>
                          <Input
                            placeholder="description"
                            type="text"
                            value={modalDesc}
                            id="modalDesc"
                            mb="1rem"
                            onChange={(e) => setModalDesc(e.target.value)}
                          />
                          <FormLabel>Image</FormLabel>
                          <Input
                            placeholder="image"
                            type="text"
                            value={modalImage}
                            id="modalImage"
                            mb="1rem"
                            onChange={(e) => setModalImage(e.target.value)}
                          />
                          <Button
                            bgColor="black"
                            color="white"
                            _hover={{ bgColor: "black" }}
                            _focus={{ bgColor: "black" }}
                            onClick={() =>
                              axios.put(
                                `http://localhost:5000/api/user/${userId}/project/${pro.id}`,
                                {
                                  name: modalName,
                                  description: modalDesc,
                                  image: modalImage,
                                }
                              )
                            }
                          >
                            Valider
                          </Button>
                        </FormControl>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <Button
                    bgColor="black"
                    color="white"
                    _hover={{ bgColor: "black" }}
                    _focus={{ bgColor: "black" }}
                    onClick={() =>
                      axios.delete(
                        `http://localhost:5000/api/user/${userId}/project/${pro.id}`
                      )
                    }
                  >
                    Supprimer
                  </Button>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box w="45%" border="1px solid white" color="white">
          <Heading as="h2" textAlign="center" pt="1rem">
            Ajouter un projet sur la platforme
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminDashboard;

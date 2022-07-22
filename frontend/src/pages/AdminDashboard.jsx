import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";

function AdminDashboard() {
  const [getProjects, setGetProjects] = useState([]);

  const [modalName, setModalName] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newImg, setNewImg] = useState("");

  const navigate = useNavigate();
  const toast = useToast();
  const { userId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const currentProjects = () => {
    axios
      .get(`http://localhost:5000/api/user/${userId}/projects`)
      .then((res) => setGetProjects(res.data))
      .catch((err) => console.warn(err));
  };

  const submitProject = () => {
    axios
      .post(`http://localhost:5000/api/user/${userId}/project`, {
        name: newTitle,
        description: newDesc,
        image: newImg,
      })
      .then(() => {
        toast({
          title: "Project posté !",
          description: "Bravo gros",
          status: "success",
          duration: 7000,
          position: "bottom-right",
          isClosable: true,
        });
      })
      .catch((err) => console.warn(err));
  };

  const handleLogout = () => {
    window.localStorage.removeItem("isUserLoggedIn");
    axios
      .get("http://localhost:5000/api/user/logout")
      .then(() => navigate("/"));
  };

  useEffect(() => {
    currentProjects();
  }, []);

  return (
    <Box bgColor="#111111" h={{ base: "", lg: "100vh" }}>
      <Button onClick={handleLogout}>Logout</Button>
      <Flex
        w="100%"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "none", lg: "space-around" }}
        alignItems={{ base: "center", lg: "none" }}
      >
        <Box
          w={{ base: "95%", lg: "45%" }}
          border="1px solid white"
          color="white"
          mt="1rem"
          mb={{ base: "1rem", lg: "none" }}
        >
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
                        <FormControl onSubmit={handleSubmit}>
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
        <Box
          w={{ base: "95%", lg: "45%" }}
          border="1px solid white"
          color="white"
        >
          <Heading as="h2" textAlign="center" pt="1rem">
            Ajouter un projet sur la platforme
            <FormControl onSubmit={handleSubmit}>
              <FormLabel mt="1rem" ml="1rem">
                Title
              </FormLabel>
              <Input
                w="70%"
                value={newTitle}
                id="newTitle"
                placeholder="name"
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <FormLabel mt="1rem" ml="1rem">
                Description
              </FormLabel>
              <Input
                w="70%"
                value={newDesc}
                id="newDesc"
                placeholder="description"
                onChange={(e) => setNewDesc(e.target.value)}
              />
              <FormLabel mt="1rem" ml="1rem">
                Image
              </FormLabel>
              <Input
                w="70%"
                value={newImg}
                id="newImg"
                placeholder="image"
                mb="1rem"
                onChange={(e) => setNewImg(e.target.value)}
              />
            </FormControl>
            <Button
              bgColor="black"
              _hover={{ bgColor: "black" }}
              _focus={{ bgColor: "black" }}
              color="white"
              onClick={submitProject}
            >
              Soumettre
            </Button>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminDashboard;

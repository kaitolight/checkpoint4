import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/react";

import Header from "../components/Header";

function OneProject() {
  const [oneProject, setOneProject] = useState("");
  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/front/project/${projectId}`)
      .then((res) => setOneProject(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <Box
      bgColor="#111111"
      h="100vh"
      color="white"
      textAlign={{ base: "center", lg: "start" }}
    >
      <Header />
      <Heading as="h1" pt="5rem" pl={{ base: "0", lg: "5rem" }}>
        You're here to learn more about {oneProject.name}
      </Heading>
      <Heading as="h2" pl={{ base: "0", lg: "5rem" }} pt="1rem" fontSize="3xl">
        A small descrition of the project
      </Heading>
      <Text pl={{ base: "0", lg: "5rem" }} pt="0.5rem">
        {oneProject.description}
      </Text>
      <Heading as="h3" pl={{ base: "0", lg: "5rem" }} pt="1rem" fontSize="3xl">
        Link to the github repository :
      </Heading>
      <Text pl={{ base: "0", lg: "5rem" }} pt="0.5rem">
        {oneProject.image}
      </Text>
    </Box>
  );
}

export default OneProject;

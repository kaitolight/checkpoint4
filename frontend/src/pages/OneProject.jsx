import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/react";

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
    <Box bgColor="#111111" h="100vh" color="white">
      <Header />
      <Heading as="h1" color="white" pt="15rem">
        You're here to learn more about {oneProject.name}
      </Heading>
    </Box>
  );
}

export default OneProject;

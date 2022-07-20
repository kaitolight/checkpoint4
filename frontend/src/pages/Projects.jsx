import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Header from "../components/Header";

import "../style/Projects.css";

export default function Projects() {
  return (
    <Box h="100vh">
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

      <Box w="70%" border="1px solid white" ml="auto" mr="auto" mt="5rem">
        <Flex justifyContent="space-around">
          <Box w="40%" height="300px" border="1px solid red" m="1rem">
            Coucou
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Flex, Image, Button } from "@chakra-ui/react";
import Header from "../components/Header";

import SquareProject from "../assets/square_project.png";
import MovieFlix from "../assets/movieflix.png";
import Habble from "../assets/habble.png";
import "../style/Projects.css";

export default function Projects() {
  const navigate = useNavigate();

  const fakeData = [
    {
      id: 5,
      name: "The Square Project",
      image: SquareProject,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat laboriosam error, hic perspiciatis mollitia voluptatem dolores ea ab. Quo sapiente atque culpa amet vero aperiam, dolorem quibusdam perferendis ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate ex aliquid voluptatum, et ratione a veritatis officiis vero possimus delectus, illo consequuntur asperiores quasi eius ullam? Sunt, repellendus eos!",
    },
    {
      id: 6,
      name: "Movieflix",
      image: MovieFlix,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat laboriosam error, hic perspiciatis mollitia voluptatem dolores ea ab. Quo sapiente atque culpa amet vero aperiam, dolorem quibusdam perferendis ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate ex aliquid voluptatum, et ratione a veritatis officiis vero possimus delectus, illo consequuntur asperiores quasi eius ullam? Sunt, repellendus eos!",
    },
    {
      id: 7,
      name: "Habble",
      image: Habble,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat laboriosam error, hic perspiciatis mollitia voluptatem dolores ea ab. Quo sapiente atque culpa amet vero aperiam, dolorem quibusdam perferendis ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate ex aliquid voluptatum, et ratione a veritatis officiis vero possimus delectus, illo consequuntur asperiores quasi eius ullam? Sunt, repellendus eos!",
    },
  ];

  return (
    <Box bgColor="#111111">
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
        w={{ base: "100%", md: "90%", lg: "50%" }}
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

      <Box w={{ base: "100%", lg: "70%" }} ml="auto" mr="auto" mt="5rem">
        <Flex justifyContent="space-around" wrap="wrap">
          {fakeData.map((pro) => (
            <Flex
              flexDir="column"
              w={{ base: "95%", lg: "45%" }}
              alignItems="center"
              key={pro.id}
            >
              <Box w="100%" m="1rem">
                <Image src={pro.image} alt="square project" />
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
                onClick={() => navigate(`/projects/${pro.id}`)}
              >
                Learn about {pro.name}
              </Button>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

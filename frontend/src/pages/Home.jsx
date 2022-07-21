import { Box, Heading, Text, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ArrowDown from "../assets/arrow_down.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/javascript.svg";
import React from "../assets/react.svg";
import NodeJS from "../assets/nodejs.svg";
import Chakra from "../assets/chakra_ui.png";
import "../style/Home.css";

export default function Home() {
  return (
    <Box bgColor="#111111">
      <Box bgGradient="linear-gradient(to bottom, rgb(34, 34, 34),rgb(17, 17, 17))">
        <Heading
          as="h1"
          pt={{ base: "1rem", lg: "10rem" }}
          color="#E5E6E4"
          fontSize={{ base: "36px", md: "52px", lg: "72px" }}
          ml={{ base: "none", md: "2rem", lg: "5rem" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Hello there <br />
          I'm <span className="cyber">Alexandre</span>, <br />a junior web
          developper. <br />
          Welcome to my portfolio
        </Heading>
      </Box>

      <Text
        fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
        color="#E5E6E4"
        ml={{ base: "none", md: "2rem", lg: "5rem" }}
        mt="5rem"
        textAlign={{ base: "center", md: "left" }}
      >
        You can{" "}
        <Link to="/contact" className="redirect">
          contact me
        </Link>{" "}
        or view all the{" "}
        <Link to="/projects" className="redirect">
          projects
        </Link>{" "}
        I have conducted so far! <br />
        Or you can scroll down to learn more about myself and the technologies
        I've learned
      </Text>

      <Flex justifyContent="center" mt="1rem">
        <Image
          src={ArrowDown}
          alt="arrow down"
          boxSize={{ base: "6rem", lg: "12rem" }}
        />
      </Flex>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "none", lg: "center" }}
        alignItems={{ base: "center", lg: "none" }}
      >
        <Box w={{ base: "95%", lg: "70%" }} h="auto" color="white" mt="5rem">
          <Flex justifyContent="space-around">
            <Box w="300px" h="500px" border="1px solid white" />
            <Box w={{ base: "90%", lg: "49.5%" }} p="1rem" color="#E5E6E4">
              <Heading as="h2" color="#9BEAEC" pb="1rem">
                About me
              </Heading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              placeat laboriosam error, hic perspiciatis mollitia voluptatem
              dolores ea ab. Quo sapiente atque culpa amet vero aperiam, dolorem
              quibusdam perferendis ipsam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rem voluptate ex aliquid voluptatum,
              et ratione a veritatis officiis vero possimus delectus, illo
              consequuntur asperiores quasi eius ullam? Sunt, repellendus eos!
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex justifyContent="center" mt="5rem">
        <Box w="70%">
          <SimpleGrid
            columns={{ base: 2, lg: 3 }}
            spacingY="2rem"
            justifyItems="center"
          >
            <Image src={HTML} alt="html" w={{ base: "30%", lg: "40%" }} />
            <Image src={CSS} alt="Santé" w={{ base: "30%", lg: "40%" }} />
            <Image src={JS} alt="Bien être" w={{ base: "30%", lg: "30%" }} />
            <Image src={React} alt="react" w={{ base: "30%", lg: "30%" }} />
            <Image src={NodeJS} alt="nodejs" w={{ base: "30%", lg: "40%" }} />

            <Image
              src={Chakra}
              alt="chakra ui"
              w={{ base: "30%", lg: "60%" }}
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

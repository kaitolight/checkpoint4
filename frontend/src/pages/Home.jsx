import { Box, Heading, Flex } from "@chakra-ui/react";
import Header from "../components/Header";

import "../Home.css";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box bgGradient="linear-gradient(to bottom, rgb(34, 34, 34),rgb(17, 17, 17))">
        <Heading
          as="h1"
          pt="10rem"
          color="#E5E6E4"
          fontSize="72px"
          ml={{ base: "none", lg: "5rem" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Hello there <br />
          I'm <span className="cyber">Alexandre</span> <br />a junior web
          developper. <br />
          Welcome to my portfolio
        </Heading>
      </Box>

      <Flex justifyContent="center">
        <Box w="70%" h="300px" color="white" border="1px solid white" mt="2rem">
          <Box
            w="49.5%"
            p="1rem"
            m="0.5rem"
            color="#E5E6E4"
            borderRight="1px solid white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            placeat laboriosam error, hic perspiciatis mollitia voluptatem
            dolores ea ab. Quo sapiente atque culpa amet vero aperiam, dolorem
            quibusdam perferendis ipsam.
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      position="fixed"
      paddingX={{ base: "2%", lg: "5%" }}
      paddingY="30px"
      bgColor="rgb(17, 17, 17)"
      w="100%"
      zIndex="999"
      color="white"
    >
      <Flex
        w="100%"
        gap={10}
        justifyContent={{ base: "center", lg: "flex-end" }}
      >
        <Link to="/">
          <Text
            _hover={{ color: "#9BEAEC", transition: "color 0.3s ease-in" }}
            fontSize="lg"
          >
            Home
          </Text>
        </Link>
        <Link to="/projects">
          <Text
            _hover={{ color: "#9BEAEC", transition: "color 0.3s ease-in" }}
            fontSize="lg"
          >
            Projects
          </Text>
        </Link>
        <Link to="/contact">
          <Text
            _hover={{ color: "#9BEAEC", transition: "color 0.3s ease-in" }}
            fontSize="lg"
          >
            Contact
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

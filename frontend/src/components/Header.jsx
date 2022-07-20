import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      position="fixed"
      paddingX={{ base: "2%", lg: "5%" }}
      paddingY="30px"
      bgColor="#E1C8A7"
      w="100%"
      zIndex="999"
      color="black"
    >
      <Flex
        w="100%"
        _hover={{ color: "#546391", transition: "color 0.2s ease-in" }}
      >
        <Link to="/">Accueil</Link> |<Link to="/projects">Réalisations</Link> |
        <Link to="/contact">Contact</Link>
      </Flex>
    </Flex>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      axios
        .post("http://localhost:5000/api/user/login", {
          email,
          password,
        })
        .then((res) => {
          if (res) {
            toast({
              title: "Vous êtes bien connecté(e).",
              description: "Content de vous revoir !",
              status: "success",
              duration: 7000,
              position: "bottom-right",
              isClosable: true,
            });
            if (res.status === 200) {
              window.localStorage.setItem("isUserLoggedIn", true);
              navigate(`/admin/${res.data.id.id}/dashboard`);
            }
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  return (
    <Box bgColor="#111111" h="100vh">
      <Flex justifyContent="center">
        <Box
          w={{ base: "95%", lg: "40%" }}
          h="500px"
          border="1px solid white"
          mt={{ base: "2rem", lg: "15rem" }}
          p="1rem"
          color="white"
        >
          <Flex>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color="white"
              />
              <FormLabel pt="1rem">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color="white"
              />
              <Button mt="1rem" color="black" onClick={handleLogin}>
                Se connecter
              </Button>
            </FormControl>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminLogin;

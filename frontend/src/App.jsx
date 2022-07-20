import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import "./App.css";

function App() {
  return (
    <Box bgColor="#FCFBF9" h="100vh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;

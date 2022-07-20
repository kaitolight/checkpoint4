import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import "./App.css";

function App() {
  return (
    <Box bgColor="#111111">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;

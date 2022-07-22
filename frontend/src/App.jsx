import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

import "./App.css";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/:userId/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Box>
  );
}

export default App;

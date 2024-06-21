import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./App.css";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    // <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
    // </Box>
  );
}

export default App;

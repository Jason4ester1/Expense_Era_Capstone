import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout"; // Import your Layout component
import Home from "./Home"; // Example component for Home
import About from "./About"; // Example component for About
import Services from "./services"; // Example component for Services
import Contact from "./Contact"; // Example component for Contact
import Login from "./Login"; // Example component for Login
import Signup from "./Signup"; // Example component for Signup
import BudgetGraph from "./BudgetGraph";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="budget" element={<BudgetGraph />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;

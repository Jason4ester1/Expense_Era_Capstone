import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout' // Import your Layout component
import Home from './Home' // Example component for Home
import About from './About' // Example component for About
import Services from './Services' // Example component for Services
import Contact from './Contact' // Example component for Contact

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

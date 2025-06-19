// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    document.documentElement.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<VideoSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

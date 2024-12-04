import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoSlider from './components/PhotoSlider';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PhotoSlider />
                <VideoSection />
                <Services />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
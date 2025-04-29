import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Menu from './components/Menu.tsx';
import Gallery from './components/Gallery.tsx';
import Promotions from './components/Promotions.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Events from './components/Events';
import Loyalty from './components/Loyalty';
import SpecialOffers from './components/SpecialOffers';
import Blog from './components/Blog';
import FloatingChat from './components/FloatingChat';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <ToastContainer 
          position="top-right" 
          autoClose={3000}
          className="toast-container"
          toastClassName="bg-coffee-dark text-cream rounded-lg"
          progressClassName="bg-coffee-light"
        />
        <Navbar />
        <main className="flex flex-col">
          <Hero />
          <About />
          <SpecialOffers />
          <Menu />
          <Gallery />
          <Promotions />
          <Events />
          <Loyalty />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </Router>
  );
};

export default App;

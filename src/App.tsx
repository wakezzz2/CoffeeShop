import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Menu from './components/Menu.tsx';
import Gallery from './components/Gallery.tsx';
import Promotions from './components/Promotions.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-coffee-dark font-secondary">
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
        <Menu />
        <Gallery />
        <Promotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

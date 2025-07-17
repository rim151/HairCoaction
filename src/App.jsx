import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Hero from './hero';
import Footer from './footer';
import ChatBot from './chatbot'; 
import Placards from './Placards';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      <ChatBot />
      <Placards />
    </>
  );
}

export default App;

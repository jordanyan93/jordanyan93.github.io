import React from 'react';
import Background from './components/Intro/Background';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';

function App() {

  return (
  <div className="App">
    <Background />
    <About />
    <Portfolio />
    <Timeline />
    <Contact />
    <Footer />
  </div>
  )
}

export default App

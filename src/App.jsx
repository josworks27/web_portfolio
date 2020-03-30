import React from 'react';
import './App.css';

// * Components
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <div className="Background">IKU_JO</div>
      <div id="Header">
        <Header />
      </div>
      <div id="Navigation">
        <Navbar />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skill">
        <Skill />
      </div>
      <div id="Work">
        <Work />
      </div>
      <div id="Footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;

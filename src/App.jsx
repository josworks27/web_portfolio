import React from 'react';
import './App.css';

// * Components
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Work from './components/Work';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="Header">
        <Header />
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Skill">
        <Skill />
      </div>
      <div className="Work">
        <Work />
      </div>
      <div className="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

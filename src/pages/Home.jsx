import React from 'react';
import '../App.css';

// * Components
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Header from '../components/Home/Header';
import Navbar from '../components/Home/Navbar';
import Work from '../components/Home/Work';
import Skill from '../components/Home/Skill';

function Home() {
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
      <div id="Work">
        <Work />
      </div>
      <div id="Skill">
        <Skill />
      </div>
      <div id="Footer">
        <Contact />
      </div>
    </div>
  );
}

export default Home;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Zoom from 'react-reveal/Zoom';
// import data from '../data';

function Header() {
  return (
    <div>
      <h1 className="Header-background">IKU_JO</h1>
      <h1 className="Header-greeting">
        <Zoom cascade>
          <div>Jo Seong-cheol's Portfolio.</div>
        </Zoom>
      </h1>
    </div>
  );
}

export default Header;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Zoom from 'react-reveal/Zoom';
// import data from '../data';

function Header() {
  return (
    <div>
      <div className="Background">IKU_JO</div>
      <h1 className="Header-greeting">
        <Zoom cascade>
          <div>Jo Seong-cheol's Portfolio.</div>
        </Zoom>
      </h1>
    </div>
  );
}

export default Header;

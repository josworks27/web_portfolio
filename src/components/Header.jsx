/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Zoom from 'react-reveal/Zoom';

function Header() {
  return (
    <div>
      <h1 className="Header-greeting">
        <Zoom top>
          <div>
            <span>Jo Seong-cheol's </span>
            <span>Portfolio</span>
            <span>.</span>
          </div>
        </Zoom>
      </h1>
    </div>
  );
}

export default Header;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Flash from 'react-reveal/Flash';

function Header() {
  return (
    <div>
      <h1 className="Header-greeting">
        <Flash>
          <div>
            <span>Jo Seong-cheol's </span>
            <span>Portfolio</span>
            <span>.</span>
          </div>
        </Flash>
      </h1>
    </div>
  );
}

export default Header;

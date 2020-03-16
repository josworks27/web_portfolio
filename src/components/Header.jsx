/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Zoom from 'react-reveal/Zoom';
// import data from '../data';

function Header() {
  return (
    <div>
      <h1 className="Header-background">IKU_JO</h1>
      <h1 className="Header-greeting">
        <Zoom cascade>조성철(IKU_JO) 포트폴리오.</Zoom>
      </h1>
    </div>
  );
}

export default Header;

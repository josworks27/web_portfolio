import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

function Header() {
  return (
    <div>
      <h1 className="Header-background">IKU_JO</h1>
      <h1 className="Header-greeting">
        안녕하세요.
        <br />
        조성철이라고 합니다.
      </h1>
      <Fade right>
        <p className="Header-title">
          {data.headerLine[0]}
          <br />
          {data.headerLine[1]}
          <br />
          {data.headerLine[2]}
          <br />
        </p>
      </Fade>
    </div>
  );
}

export default Header;

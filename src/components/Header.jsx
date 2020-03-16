import React from 'react';
import data from '../data';

function Header() {
  return (
    <div>
      <h1>반갑습니다. 저는 조성철이라고 합니다.</h1>
      <p className="Header-title">
        {data.headerLine[0]}
        <br />
        {data.headerLine[1]}
        <br />
        {data.headerLine[2]}
        <br />
      </p>
    </div>
  );
}

export default Header;

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

function WorkEntry({ id, imgSrc, title, type }) {
  return (
    <div className="WorkEntry-content">
      <Link to={`/projects/${id}`} style={{ textDecoration: 'none' }}>
        <img src={imgSrc} alt="프로젝트 이미지" />
        <h1>{title}</h1>
      </Link>
      <div>{type}</div>
    </div>
  );
}

export default WorkEntry;

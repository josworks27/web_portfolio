import React from 'react';

function ProjectLeftEntry({ title, type, role, period, imgSrc }) {
  return (
    <div className="Project-left-wrap">
      <h1>{title}</h1>
      <div>{type}</div>
      <div>{role}</div>
      <div>{period}</div>
      {/* <img src={imgSrc} alt={title} /> */}
    </div>
  );
}

export default ProjectLeftEntry;

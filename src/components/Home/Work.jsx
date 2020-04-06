/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react';
import data from '../../data';
import WorkEntry from './WorkEntry';

function Work() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="Work-content">
        <div>
          {data.projectData.map((project) => (
            <WorkEntry
              key={project.id}
              id={project.id}
              title={project.title}
              imgSrc={project.imgSrc}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;

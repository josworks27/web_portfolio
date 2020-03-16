/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react';
import Project from './Project';
import data from '../data';

function Work() {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {data.projectData.map((project) => {
          <Project
            key={project.id}
            title={project.title}
            period={project.period}
            content={project.content}
          />;
        })}
      </div>
    </div>
  );
}

export default Work;

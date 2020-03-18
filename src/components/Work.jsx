/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react';
import data from '../data';
import Project from './Project';

function Work() {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {data.projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            period={project.period}
            description={project.description}
            type={project.type}
            role={project.role}
            feature={project.feature}
            techStack={project.techStack}
            imgSrc={project.imgSrc}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;

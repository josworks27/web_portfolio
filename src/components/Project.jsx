import React from 'react';
import ProjectLeftEntry from './ProjectLeftEntry';
import ProjectRightEntry from './ProjectRightEntry';

function Project({
  title,
  period,
  description,
  type,
  role,
  feature,
  techStack,
  imgSrc,
  github,
}) {
  return (
    <div>
      <div className="Project-left">
        <ProjectLeftEntry
          title={title}
          type={type}
          role={role}
          period={period}
          img={imgSrc}
        />
      </div>
      <div className="Project-right">
        <ProjectRightEntry
          description={description}
          feature={feature}
          techStack={techStack}
          github={github}
        />
      </div>
    </div>
  );
}

export default Project;

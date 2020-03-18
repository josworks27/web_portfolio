import React from 'react';
import ProjectLeft from './ProjectLeftEntry';
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
      <ProjectLeft
        title={title}
        type={type}
        role={role}
        period={period}
        img={imgSrc}
      />
      <ProjectRightEntry
        description={description}
        feature={feature}
        techStack={techStack}
        github={github}
      />
    </div>
  );
}

export default Project;

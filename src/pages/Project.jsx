import React from 'react';
import data from '../data';
import ProjectLeftEntry from '../components/Project/ProjectLeftEntry';
import ProjectRightEntry from '../components/Project/ProjectRightEntry';

function Project({ match }) {
  return (
    <div>
      <div className="Project-wrap">
        <div className="Project-left">
          <ProjectLeftEntry
            title={data.projectData[match.params.id].title}
            type={data.projectData[match.params.id].type}
            role={data.projectData[match.params.id].role}
            period={data.projectData[match.params.id].period}
            // img={data.projectData[match.params.id].imgSrc}
          />
        </div>
        <div className="Project-right">
          <ProjectRightEntry
            id={data.projectData[match.params.id].id}
            description={data.projectData[match.params.id].description}
            feature={data.projectData[match.params.id].feature}
            techStack={data.projectData[match.params.id].techStack}
            github={data.projectData[match.params.id].github}
            demoUrl={data.projectData[match.params.id].demoUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;

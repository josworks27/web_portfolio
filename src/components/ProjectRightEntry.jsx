import React from 'react';

function ProjectRightEntry({ description, feature, techStack, github }) {
  return (
    <div className="Project-right-wrap">
      <div>
        <h1>Description</h1>
        <p>{description}</p>
      </div>
      <div>
        <h1>What did I Do</h1>
        <ul>
          {feature.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Tech Stack</h1>
        <ul>
          {techStack.map((data, index) => (
            <li key={index}>{`${data.part}: ${data.stack}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Github</h1>
        <ul>
          {github.map((data, index) => (
            <a target="_blank" rel="noopener noreferrer" href={data.url} key={index} alt="github">
              <li>{`${data.part} Link`}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectRightEntry;

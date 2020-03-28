import React from 'react';

function ProjectRightEntry({ description, feature, techStack, github }) {
  return (
    <div>
      <div>
        <h1>Description</h1>
        <div>{description}</div>
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
            <a href={data.url} key={index}>
              <li>{`${data.part} Link`}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectRightEntry;

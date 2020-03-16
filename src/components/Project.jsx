import React from 'react';

function Project(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.period}</div>
    </div>
  );
}

export default Project;

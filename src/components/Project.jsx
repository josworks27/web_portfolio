import React from 'react';

function Project({ title, period, contents }) {
  // console.log('?', contents);
  return (
    <div>
      <h1>{title}</h1>
      <div>{period}</div>
      <ul>
        {contents.map((content) => (
          <li>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;

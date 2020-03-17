import React from 'react';

function Project({ title, period, contents }) {
  // console.log('?', contents);
  return (
    <div>
      <h1>{title}</h1>
      <div>{period}</div>
      <ul>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
